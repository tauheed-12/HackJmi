import React from 'react'
import "./Road_Dash.css"
import vedio_road from "../../../Assets/Road_Vedio.mp4";
import Road_P1 from "../../../Assets/Road_P1.jpg";
import Road_P2 from "../../../Assets/Road_P2.jpg";
import Road_P3 from "../../../Assets/Road_P3.jpg";
import Road_P4 from "../../../Assets/Road_P4.jpg";
import Road_P5 from "../../../Assets/Road_P5.jpg";
import road_labels from "../../../Assets/road_labels.jpg"
const Road_Dash = () => {
  const img = [Road_P1, Road_P2, Road_P3, Road_P4, Road_P5];
  return (
      <div className='safety__Dashboard-Road'>
        <div className='safety__Dashboard-Road-vedio'>
          <h1>Demo Video</h1>
          <div className='dash-head-help'></div>
          <video controls autoPlay>
            <source src={vedio_road} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='safety__Dashboard-Road-OriginalImg'>
          <h2>Model images</h2>
          <div className='original-head-help'></div>
        </div>
        <div className="safety__Dashboard-Road-ModelImage">
          {img.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
        <div className='safety__Dashboard-Class'>
        <div className='safety__Dashboard-Road-ClassList'>
          <h2>Classes List</h2>
          <div className='classlist-head-help'></div>
             <ul>
                <li>Opening Eye</li>
                <li>Closed Eye</li>
                <li>Cigarette</li>
                <li>Phone</li>
                <li>Seatbelt</li>
             </ul>
        </div>
        <div className='safety__Dashboard-Road-Labels'>
          <h2>Labels Diagram</h2>
          <div className='labels-head-help'></div>
          <img src={road_labels} alt='label-diagram'></img>
        </div>
        </div>
      </div>
  )
}

export default Road_Dash
