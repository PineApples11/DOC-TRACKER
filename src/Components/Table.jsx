import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

function Table({ newPatient }) { 
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  // function handleViewPatientClick(){
    useEffect(() => {
      fetch(`http://localhost:3000/newpatients/${patientId}`) // Replace with your actual API URL
        .then((response) => response.json())
        .then((data) => {
          setPatients(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching patients:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
  //   const[isView,setIsView]= useState(false)

  // }

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
             {/* <td>  <button onClick={handleViewPatientClick}> view patient </button> </td> */}
             <td>  <button>  <Link to={`/patient/${patient.id}`}>View</Link> </button> </td>
             
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
