import React from 'react'
import "./Technology.css"
const Technology = () => {
  return (
    <div className='safety__Technology'>
      <div className='safety__Technology-div1'>
          <div className='safety__Technology-div1-Tech1'>
              <h1>Reactjs</h1>
              <p>JavaScript library for building interactive user interfaces with a component-based architecture for web applications.</p>
          </div>
          <div className='safety__Technology-div1-Tech2'>
              <h1>Flask</h1>
              <p>Python microframework for building web applications with simplicity, flexibility, and easy integration of extensions for various functionalities.</p>
          </div>
      </div>
      <div className='safety__Technology-div2'>
           <div className='safety__Technology-div2-Tech1'>
              <h1>YoloV8</h1>
              <p>Ultralytics YOLOv8 is a cutting-edge, state-of-the-art (SOTA) model that builds upon the success of previous YOLO versions and introduces new features.</p>
           </div>
           <div className='safety__Technology-div2-Tech2'>
              <h1>Flask</h1>
              <p> Python microframework for building web applications with simplicity, flexibility, and easy integration of extensions for various functionalities.</p>
           </div>
      </div>
      <div className='safety__Technology-intro'>
           <h1>Technology Stacks</h1>
           <p>Our technology stack combines the power and flexibility of ReactJS for frontend development, Flask for backend operations, and YOLOv8 for cutting-edge object detection capabilities.</p>
           <p>With ReactJS, we create dynamic and responsive user interfaces, while Flask handles the backend logic efficiently. YOLOv8, an advanced model, enriches our application with state-of-the-art object detection functionalities.</p>
      </div>
    </div>
  )
}

export default Technology
