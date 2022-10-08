
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addrecord from './Components/Addrecord';
import Delete from './Components/Delete';
import Home from './Components/Home';
import Update from './Components/Update';
import View from './Components/View';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="classname">
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/View/:id"  element={<View/>} />
        <Route path="/delete/:id"  element={<Delete/>} />
        <Route path="/update/:id"  element={<Update/>} />
        <Route path="/Addrecord"  element={<Addrecord/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
