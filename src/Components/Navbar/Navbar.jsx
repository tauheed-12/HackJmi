import React from 'react'
import { useState, useEffect } from 'react';
import "./Navbar.css"
const Navbar = () => {
   const [scrolling, setScrolling] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0 && window.scrollY<200) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className={scrolling ? 'navbar__scrolled' : 'safety__Navbar'}>
      <div className='safety__Navbar-logo'>
         <h1>ByteBandits</h1>
      </div>
    </div>
  )
}

export default Navbar
