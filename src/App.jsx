import React from 'react'
import Home from './Home'
import Construct_Das from './Components/Dasboard/Construct_Das/Construct_Das'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Road_Dash from './Components/Dasboard/Road_Dash/Road_Dash'
import Live_Stream_Cons from './Components/Dasboard/Construct_Das/Live_Stream_Cons';
import Live_Stream_Road from './Components/Dasboard/Road_Dash/Live_Stream_Road';
import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/construction_dashboard' element={<Construct_Das/>}/>
       <Route path='/road_safety_dashboard' element={<Road_Dash/>}/>
       <Route path='/construction-Live_stream' element={<Live_Stream_Cons/>}/>
       <Route path='/road-Live_stream' element={<Live_Stream_Road/>}></Route>
      </Routes>
    </div>
  )
}

export default App
