import React, { useState } from 'react';
import "./Road_Safety.css";
import greater_than from "../../Assets/greater-than-symbol.png";
import less_than from "../../Assets/less-than-symbol.png";
import Road_P1 from "../../Assets/Road_P1.jpg";
import Road_P2 from "../../Assets/Road_P2.jpg";
import Road_P3 from "../../Assets/Road_P3.jpg";
import Road_P4 from "../../Assets/Road_P4.jpg";
import Road_P5 from "../../Assets/Road_P5.jpg";
import { Link } from 'react-router-dom';
const Road_Safety = () => {
  const images = [Road_P1, Road_P2, Road_P3, Road_P4, Road_P5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='safety__Road'>
      <div className='safety__Road-Img'>
        <img src={less_than} id='symbol-left' onClick={handlePreviousImage} alt='Previous' />
        <img src={images[currentImageIndex]} alt='Road' />
        <img src={greater_than} id='symbol-right' onClick={handleNextImage} alt='Next' />
      </div>
      <div className='safety__Road-Content'>
        <h3>Road Site Safety Model</h3>
        <div id='heads-help'></div>
        <div className='safety__Road-Para'>
        <p>This model is also based on YOLOV8 like our previous construction site safety model. Our road safety model focuses on detecting several key factors that significantly impact safety on the road</p>
        <p>Seatbelt Usage, Distracted Driving, Smoking While Driving, Monitoring Eye State</p>
        <Link to='/road_safety_dashboard'>
        <button>Dashboard <span id='arrow-road'>→</span></button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Road_Safety;
