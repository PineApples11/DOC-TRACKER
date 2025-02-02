import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientForm from "./Components/PatientForm";
import Table from "./Components/Table";
import PatientDetails from "./Components/Pages.jsx/PatientDetails";
import PatientDetailsForm from "./Components/Pages.jsx/PatientDetailsForm"

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/newpatients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  const handleSubmit = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><PatientForm onSubmit={handleSubmit} /><Table patients={patients} />   </>} />
        <Route path="/patientdetails/:id" element={<PatientDetails />} />
        <Route path="/patientdetailsform/:id" element={<PatientDetailsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
