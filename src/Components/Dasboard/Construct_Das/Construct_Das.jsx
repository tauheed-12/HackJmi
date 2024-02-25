import React, { useState, useEffect } from 'react';
import "./Construct_Das.css";
import { Link } from 'react-router-dom';
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
  const imgArray = [img1, img2, img3, img4, img5, img6, img7];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
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
  useEffect(() => {
    const intervalId = setInterval(nextImage, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const selectedImage = imgArray[selectedImageIndex];

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
      <div className='safety__Dashboard-Construction-vedio-image'>
        <div className='safety__Dashboard-Construction-vedio'>
          <h1>Demo Vedio</h1>
          <video controls autoPlay>
            <source src={Const_Vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
         {/* <div className='safety__Dashboard-Construction-OriginalImg'>
          <div className='original-headc-help'></div>
        </div>  */}
        <div className="safety__Dashboard-Construction-ModelImage">
        <h2>Model images</h2>
          <img src={selectedImage} alt={`Image ${selectedImageIndex}`} />
        </div>
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
          <img src={const_label} alt='label-diagram' />
        </div>
      </div>
    </div>
  );
}

export default Construct_Das;
