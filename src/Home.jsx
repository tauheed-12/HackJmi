import React from 'react'
import {Navbar, Header, Safety,Construction_Safety, Road_Safety, Technology, Footer} from "./Components/index"
const Home = () => {
  return (
    <div>
      <div>
       <Navbar/>
       <Header/>
      </div>
      <Safety/>
      <Construction_Safety/>
      <Road_Safety/>
      <Technology/>
      <Footer/>
    </div>
  )
}

export default Home
