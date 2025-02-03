
import React, { useState,useEffect } from 'react'
import './App.css'
import PatientForm  from "./Components/PatientForm"
import Table from "./Components/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import FirstPage from "./FirstPage"; // Import Landing Page
import { ToastContainer } from "react-toastify";


function App() {
  const [patients, setPatients] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/newpatients")
      .then((r) => r.json())
      .then((data) => setPatients(data));
  }, []);

  
  const handleSubmit = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <>
    
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                  <Route path="/" element={<FirstPage />} /> {/* First Page */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/home" element={<Home />} /> {/* After Login */}
                </Routes>
            </BrowserRouter>
        
   <PatientForm onSubmit={handleSubmit}/>
   <Table newPatient={patients}/>
  
    </>
  )
}

export default App
