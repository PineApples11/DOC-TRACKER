import React, { useState, useEffect } from "react";


function AppointmentForm() {
  const [patientsName, setPatientsName] = useState("");
  const [location, setLocation] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split("T")[0]); 
    setTime(now.toTimeString().split(" ")[0]); 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:");
    console.log("Patient's Name:", patientsName);
    console.log("Location:", location);
    console.log("Doctor's Name:", doctorName);
    console.log("Date:", date);
    console.log("Time:", time);
    
  };

  return (
    <div className="App">
      <h1>Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Patient's Name:
          <input
            type="text"
            value={patientsName}
            onChange={(e) => setPatientsName(e.target.value)}
            required
          />
        </label><br /><br />

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label><br /><br />

        <label>
          Doctor Name:
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </label><br /><br />

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label><br /><br />

        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
