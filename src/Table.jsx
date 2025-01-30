import React from 'react';

function Table({ newPatient }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Weight</th>
            <th>Action</th>
            {/* <th>Prescription</th> */}
          </tr>
        </thead>
        <tbody>
          {newPatient.length === 0 ? (
            <tr>
              <td >No patients available</td>
            </tr>
          ) : (
            newPatient.map((row, index) => (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.weight}</td>
             <td>  <button> view patient </button> </td> 
               {/* <td> <button>view patient </button> </td>  */}
              
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
