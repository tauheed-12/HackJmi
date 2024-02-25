from flask import Flask, Request, render_template, Response, jsonify, session
from flask_cors import CORS
from ConstructionSiteDetection import instant_generate_frames
from RoadSafetyDetection import instant_generate_frames_2
import cv2
import time


app = Flask(__name__)
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


if __name__ == '__main__':
    app.run(debug=True)
