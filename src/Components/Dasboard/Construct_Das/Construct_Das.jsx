import React from 'react';
import "./Construct_Das.css";
import { useState } from 'react';
import Const_Vedio from "../../../Assets/const_vedio.mp4"
import img1 from "../../../Assets/Const_P1.jpg"
import img2 from "../../../Assets/Const_P2.jpg"
import img3 from "../../../Assets/Const_P3.jpg"
import { Link } from 'react-router-dom';
import img4 from "../../../Assets/Const_P4.jpg"
import img5 from "../../../Assets/Const_P5.jpg"
import img6 from "../../../Assets/Const_P6.jpg"
import img7 from "../../../Assets/Const_P7.jpg"
import const_label from "../../../Assets/Const_Label.jpg"
const Construct_Das = () => {
  const img = [img1, img2, img3, img4, img5, img6, img7]
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    // You can implement your upload logic here, e.g., using FormData and sending it to your server
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // Send formData to your server using fetch or Axios
      // Example using fetch:
      fetch('https://example.com/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        console.log("Success",response)
      })
      .catch(error => {
         console.log(error)
      });
    }
  };
  return (
    <div className='safety__Dashboard-Construction'>
    <div className='safety_button_form'>
    <Link to='/construction-Live_stream'>
    <div className='live__stream_button'>
    <button type='submit'>Live Stream</button>
    </div>
    </Link>
      <div className='upload_images'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
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
