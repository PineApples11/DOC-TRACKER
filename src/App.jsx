import { Routes, Route } from "react-router-dom"; // Keep only Routes & Route
import FirstPage from "./FirstPage";
import Login from "./Login";
import Registration from "./Registration";
import PatientForm from "./Components/PatientForm";
import PatientDetails from "./Components/Pages/PatientDetails";
import Table from "./Components/Table";
import PatientDetailsForm from "./Components/Pages/PatientDetailsForm";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div>
        <ToastContainer />

    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration/>} /> 
      <Route path="/patients" element={<PatientDetails />} />
      <Route path="/PatientForm" element={<PatientForm/>} />
      <Route path="/table" element={<Table />} /> 
      <Route path="/patientdetails/:id" element={<PatientDetails />} />
      <Route path="/patientdetailsform/:id" element={<PatientDetailsForm />} />
    </Routes>
    </div>
  );
}

export default App;
