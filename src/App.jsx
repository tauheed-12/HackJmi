import React from 'react'
import Home from './Home'
import Construct_Das from './Components/Dasboard/Construct_Das/Construct_Das'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Road_Dash from './Components/Dasboard/Road_Dash/Road_Dash'
import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/construction_dashboard' element={<Construct_Das/>}/>
       <Route path='/road_safety_dashboard' element={<Road_Dash/>}/>
      </Routes>
    </div>
  )
}

export default App
