import React from 'react'
import banner from "../../Assets/banner.jpg"
import { Link } from 'react-router-dom'
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
         <Link to='/road_safety_dashboard'>
          <button type='button'>Dashboards(Road) →</button>
          </Link>
          <Link to='/construction_dashboard'>
          <button type='button'>Dashboards(Construction) →</button>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Header
