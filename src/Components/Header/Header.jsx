import React from 'react'
import banner from "../../Assets/banner.jpg"
import "./Header.css"
const Header = () => {
  return (
    <div className='safety__Header'>
      <div className='safety__Header-img'>
        <img src={banner} alt='banner'></img>
      </div>
      <div className='safety__Header-Content'>
        <h1>Ensuring Safety Every Step of the Way</h1>
        <h3>Construction Site & Road Monitoring System</h3>
         <div className='safety__Header-button'>
          <button type='button'>Dashboards(Road) →</button>
          <button type='button'>Dashboards(Construction) →</button>
          </div>
      </div>
    </div>
  )
}

export default Header
