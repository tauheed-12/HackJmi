import React from 'react'
import "./Safety.css"
import iot from "../../Assets/iot.png"
import dashboard from "../../Assets/monitor.png"
import ml from "../../Assets/data-model.png"
import section from "../../Assets/section-icon-2.svg"
const Safety = () => {
  return (
    <div className='safety__Safety'>
      <div className='safety__Safety-heading'>
         <img src={section}></img>
        <h1>Features</h1>
      </div>
      <div className='safety__Safety-Models'>
    <div className='safety__Safety-Models_Container'>
        <img src={iot} alt='iot'></img>
        <h3>IoT Sensors</h3>
        <p>Utilizing advanced IoT sensors to seamlessly gather real-time data and conduct comprehensive analyses for enhanced safety measures.</p>
    </div>
    <div className='safety__Safety-Models_Container'>
        <img src={ml} alt='al/ml'></img>
        <h3>AI/ML</h3>
        <p>Implementing cutting-edge AI/ML models to ensure efficient resource tracking and continuous monitoring of safety protocols.</p>
    </div>
    <div className='safety__Safety-Models_Container'>
        <img src={dashboard} alt='dashboard'></img>
        <h3>User-friendly Dashboard</h3>
        <p>Designing an intuitive and accessible dashboard interface for effortless navigation and streamlined user experience.</p>
    </div>
</div>

    </div>
  )
}

export default Safety
