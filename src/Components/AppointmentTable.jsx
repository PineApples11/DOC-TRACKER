import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Table() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/newpatients")  // Using your API endpoint
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      <table >
        <thead>
          <tr>
           <th>Date</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Appointment</th>
          
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((row) => (
              <tr key={row.id}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.weight}</td>
                <td>
                  <Link to={`/patientdetails/${row.id}`}>
                    <button> Add Appointment </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td >No patients available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
