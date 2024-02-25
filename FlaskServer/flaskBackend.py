from flask import Flask, Request, render_template, Response, jsonify, session, request, send_file
from flask_cors import CORS
from ConstructionSiteDetection import instant_generate_frames, singleImageDetection
from RoadSafetyDetection import instant_generate_frames_2, singleImageDetection2
from PIL import Image
import cv2
import time
from icecream import ic
import os
import io

savedImageConstruction = None
savedImageConstruction = None

app = Flask(_name_)
app.config['UPLOAD_FOLDER'] = './images'
camera = None
camera_active = False
CORS(app)

@app.route('/')
@app.route('/video_feed_construction')
def video_feed_contruction():
    camera = cv2.VideoCapture(0)
    return Response(instant_generate_frames(camera), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/video_feed_road')
def video_feed_road():
    camera = cv2.VideoCapture(0)
    return Response(instant_generate_frames_2(camera), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/upload_road',methods=['GET','POST'])
def upload_road():
    global savedImageRoad
    if 'file' not in request.files:
        print("No Image file")
        return 'No image file provided', 400
    image_file = request.files['file']
    image_file.save(os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename))
    savedImageRoad = f"./images/{image_file.filename}"
    if image_file.filename == '':
        return 'Empty file name', 400
    return "Image saved", 200
    

@app.route("/show_road", methods=['GET'])
def show_road():
    global savedImageRoad
    image = cv2.imread(savedImageRoad)
    annotated_image = singleImageDetection2(image)
    pil_img = Image.fromarray(annotated_image)
    image_bytes = io.BytesIO()
    pil_img.save(image_bytes,format="PNG")
    image_bytes.seek(0)
    return send_file(image_bytes, mimetype='image/jpeg')



@app.route('/upload_construction',methods=['GET','POST'])
def upload_construction():
    global savedImageConstruction
    if 'file' not in request.files:
        print("No Image file")
        return 'No image file provided', 400
    image_file = request.files['file']
    image_file.save(os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename))
    savedImageConstruction = f"./images/{image_file.filename}"
    if image_file.filename == '':
        return 'Empty file name', 400
    return "Image saved", 200
    

@app.route("/show_construction", methods=['GET'])
def show_construction():
    global savedImageConstruction
    image = cv2.imread(savedImageConstruction)
    annotated_image = singleImageDetection(image)
    pil_img = Image.fromarray(annotated_image)
    image_bytes = io.BytesIO()
    pil_img.save(image_bytes,format="PNG")
    image_bytes.seek(0)
    return send_file(image_bytes, mimetype='image/jpeg')





if _name_ == '_main_':
    app.run(debug=True)