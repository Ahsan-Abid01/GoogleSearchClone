import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import Result from './Component/ResultPage/Result';
import  './app.css'
export default function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </>
  )
}



