import React from 'react';
import "./Construct_Das.css";
import Const_Vedio from "../../../Assets/const_vedio.mp4"
import img1 from "../../../Assets/Const_P1.jpg"
import img2 from "../../../Assets/Const_P2.jpg"
import img3 from "../../../Assets/Const_P3.jpg"
import img4 from "../../../Assets/Const_P4.jpg"
import img5 from "../../../Assets/Const_P5.jpg"
import img6 from "../../../Assets/Const_P6.jpg"
import img7 from "../../../Assets/Const_P7.jpg"
import const_label from "../../../Assets/Const_Label.jpg"
const Construct_Das = () => {
  const img = [img1, img2, img3, img4, img5, img6, img7]
  return (
    <div className='safety__Dashboard-Construction'>
            <div className='stream'>
      <h1>Live Streaming</h1>
      <img src="http://127.0.0.1:5000/video_feed_construction" width="600" height="480" />
      </div>
        <div className='safety__Dashboard-Construction-vedio'>
          <h1>Demo Video</h1>
          <div className='dashc-head-help'></div>
          <video controls autoPlay>
            <source src={Const_Vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='safety__Dashboard-Construction-OriginalImg'>
          <h2>Model images</h2>
          <div className='original-headc-help'></div>
        </div>
        <div className="safety__Dashboard-Construction-ModelImage">
          {img.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
        <div className='safety__Dashboard-Construction-Class'>
        <div className='safety__Dashboard-Construction-ClassList'>
          <h2>Classes List</h2>
          <div className='classlist-headc-help'></div>
             <ul>
                <li>Hardhat</li>
                <li>Mask</li>
                <li>NO-Hardhat</li>
                <li>N0-Mask</li>
                <li>NO-Safety Vest</li>
                <li>Person</li>
                <li>Sefty Cone</li>
                <li>Safety Vest</li>
                <li>Machinery</li>
                <li>Vehicle</li>
             </ul>
        </div>
        <div className='safety__Dashboard-Construction-Labels'>
          <h2>Labels Diagram</h2>
          <div className='labels-headc-help'></div>
          <img src={const_label} alt='label-diagram'></img>
        </div>
        </div>
      </div>
  )
}

export default Construct_Das;
