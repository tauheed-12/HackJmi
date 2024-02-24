import React, { useState } from 'react';
import "./Construction_Safety.css";
import img from "../../Assets/Construction-img3.jpg";
import greater_than from "../../Assets/greater-than-symbol.png";
import less_than from "../../Assets/less-than-symbol.png";
import Const_P1 from "../../Assets/Const_P1.jpg";
import Const_P2 from "../../Assets/Const_P2.jpg";
import Const_P3 from "../../Assets/Const_P3.jpg";
// import Const_P4 from "../../Assets/Const_P4.jpg";
// import Const_P5 from "../../Assets/Const_P5.jpg";

const Construction_Safety = () => {
  const images = [Const_P1, Const_P2, Const_P3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='safety__Construction'>
      <div className='safety__Construction-Content'>
        <h3>Construction Site Safety Model</h3>
        <div id='head-help'></div>
        <div className='safety__Construction-Para'>
        <p>
        Construction site safety model: In recent years, the construction industry has witnessed a growing emphasis on safety measures to mitigate workplace accidents and ensure the well-being of workers. Leveraging advancements in computer vision and deep learning techniques, this project introduces a novel approach to enhance construction site safety through the implementation of a YOLOv8-based model.
        </p>
        <p>
        The You Only Look Once version 8 YOLOv8 is a state-of-the-art object detection algorithm renowned for its accuracy and efficiency in real-time object detection tasks. By harnessing the power of YOLOv8, we aim to develop a robust safety model capable of identifying potential hazards, equipment, and personnel within the construction site environment.
        </p>
        <button>Dashboard →</button>
        </div>
      </div>
      <div className='safety__Construction-Img'>
        <img
          src={less_than}
          id='symbols-left'
          onClick={handlePreviousImage}
          alt='Previous'
        />
        <img src={images[currentImageIndex]} alt='Construction' style={{ width: '100%', height: '100%' }} />
        <img
          src={greater_than}
          id='symbols-right'
          onClick={handleNextImage}
          alt='Next'
        />
      </div>
    </div>
  );
};

export default Construction_Safety;
