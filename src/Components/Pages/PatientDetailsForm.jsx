import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PatientDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bloodType: "",
    medications: "",
    allergies: "",
    illnesses: "",
    surgeries: "",
    insurance: "",
    kin: "",
    date: "",
    diagnosis: "",
    prescriptions: "",
    instructions: "",
    doctor: "",
    hospital: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/newpatients/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setFormData({
            bloodType: data.medical_history?.bloodType || "",
            medications: data.medical_history?.medications?.join(", ") || "",
            allergies: data.medical_history?.allergies?.join(", ") || "",
            illnesses: data.medical_history?.chronicIllnesses?.join(", ") || "",
            surgeries: data.medical_history?.majorSurgeries?.join(", ") || "",
            insurance: data.medical_history?.healthInsuranceProvider || "",
            kin: data.medical_history?.nextOfKin || "",
            date: data.prescription?.dateOfPrescription || "",
            diagnosis: data.prescription?.diagnosis || "",
            prescriptions: data.prescription?.medicationsPrescribed?.dosage || "",
            instructions: data.prescription?.additionalInstructions?.join(", ") || "",
            doctor: data.prescription?.doctorsName || "",
            hospital: data.prescription?.hospital || "",
          });
        }
      })
      .catch((error) => console.error("Error fetching patient details:", error));
  }, [id]);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updatedData = {
      medical_history: {
        bloodType: formData.bloodType,
        medications: formData.medications.split(","),
        allergies: formData.allergies.split(","),
        chronicIllnesses: formData.illnesses.split(","),
        majorSurgeries: formData.surgeries.split(","),
        healthInsuranceProvider: formData.insurance,
        nextOfKin: formData.kin,
      },
      prescription: {
        dateOfPrescription: formData.date,
        diagnosis: formData.diagnosis,
        medicationsPrescribed: {
          dosage: formData.prescriptions,
          frequency: "N/A", 
        },
        additionalInstructions: formData.instructions.split(","),
        doctorsName: formData.doctor,
        hospital: formData.hospital,
      },
    };

    fetch(`http://localhost:3000/newpatients/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Patient details updated successfully!");
        navigate(`/patientdetails/${id}`);
      })
      .catch((error) => console.error("Error updating patient details:", error));
  }

  return (
    <div className="detail-form">
      <h1>Medical Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} />
        <input type="text" name="medications" placeholder="Medications (comma-separated)" value={formData.medications} onChange={handleChange} />
        <input type="text" name="allergies" placeholder="Allergies (comma-separated)" value={formData.allergies} onChange={handleChange} />
        <input type="text" name="illnesses" placeholder="Chronic Illnesses (comma-separated)" value={formData.illnesses} onChange={handleChange} />
        <input type="text" name="surgeries" placeholder="Major Surgeries (comma-separated)" value={formData.surgeries} onChange={handleChange} />
        <input type="text" name="insurance" placeholder="Insurance Provider" value={formData.insurance} onChange={handleChange} />
        <input type="text" name="kin" placeholder="Next Of Kin" value={formData.kin} onChange={handleChange} />

        <h2>Prescription Form</h2>
        <input type="text" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
        <input type="text" name="diagnosis" placeholder="Diagnosis" value={formData.diagnosis} onChange={handleChange} />
        <input type="text" name="prescriptions" placeholder="Medications Prescribed" value={formData.prescriptions} onChange={handleChange} />
        <input type="text" name="instructions" placeholder="Additional Instructions (comma-separated)" value={formData.instructions} onChange={handleChange} />
        <input type="text" name="doctor" placeholder="Doctor's Name" value={formData.doctor} onChange={handleChange} />
        <input type="text" name="hospital" placeholder="Hospital" value={formData.hospital} onChange={handleChange} />

        <button type="submit" className="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default PatientDetailsForm;
