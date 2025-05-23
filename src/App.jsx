import Complete from './complete.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx';
import './App.css';
import React from "react";
import Complete2 from './complete2.jsx';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Complete />} />
          <Route path='/therapies' element={<Complete2 />}/>
        </Routes>

        
    </div>

  )
}


export default App
