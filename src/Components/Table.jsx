import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Table() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/newpatients")  // Using your API endpoint
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  function handleViewDetails(id) {
    navigate(`/patientdetails/${id}`); // Navigate dynamically
  }

  return (
    <div>
      <h2>Patient List</h2>
      <table >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Weight</th>
            <th>Action</th>
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
              
                    <button onClick={() => handleViewDetails(row.id)}>View</button>
                
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
