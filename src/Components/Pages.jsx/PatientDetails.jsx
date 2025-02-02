import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/newpatients/${id}`)
      .then((response) => response.json())
      .then((data) => setPatient(data))
      .catch((error) => console.error("Error fetching patient:", error));
  }, [id]);

  if (!patient) {
    return <h2>Loading patient details...</h2>;
  }

  return (
    <div>
      <h2>Patient Details</h2>
      <p><strong>First Name:</strong> {patient.firstName}</p>
      <p><strong>Last Name:</strong> {patient.lastName}</p>
      <p><strong>Weight:</strong> {patient.weight} kg</p>

      <h3>Medical History</h3>
      <p><strong>Blood Type:</strong> {patient.medical_history?.bloodType || "N/A"}</p>
      <p><strong>Medications:</strong> {patient.medical_history?.medications?.join(", ") || "None"}</p>
      <p><strong>Allergies:</strong> {patient.medical_history?.allergies?.join(", ") || "None"}</p>
      <p><strong>Chronic Illnesses:</strong> {patient.medical_history?.chronicIllnesses?.join(", ") || "None"}</p>
      <p><strong>Major Surgeries:</strong> {patient.medical_history?.majorSurgeries?.join(", ") || "None"}</p>
      <p><strong>Health Insurance Provider:</strong> {patient.medical_history?.healthInsuranceProvider || "N/A"}</p>
      <p><strong>Next of Kin:</strong> {patient.medical_history?.nextOfKin || "N/A"}</p>

      <Link to={`/patientdetailsform/${id}`}>
        <button>Edit</button>
      </Link>
      <Link to="/">
        <button>Back to Patients</button>
      </Link>
    </div>
  );
}

export default PatientDetails;
