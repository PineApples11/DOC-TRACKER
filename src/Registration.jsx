import { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import './App.css';

const Registration = () => {
   //const [id,setId] = useState("");
   const [name,setName] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();

   const isValidate = () => {
        let isProceed = true;
        let errormessage = " Please Entre : ";
        let missingFields = [];

        if(name === ""){
            isProceed = false;
            errormessage += 'name';

        }
        if (password === ""){
            isProceed = false;
            errormessage += 'password';
        }
        if (!isProceed){
              toast.warning(errormessage + missingFields.join(" ,"));  
        }         return isProceed;
    }
    const handleSubmit = (e) => {e.preventDefault();
    if(!isValidate()) return;
        let stateData = {name,password};//declairing an object 

        console.log(stateData);
        


        
        //fetching the data from the server
        fetch('http://localhost:3000/doctors',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(stateData)
        }).then((res)=>{
            toast.success("New user added");
            console.log("new user added");
            navigate('/login');
        }).catch((err)=>{
            toast.error("Failed :"+err.message);

        })

    
    }

    return (
        <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Register</button>
            <button onClick={() => navigate("/login")}>Back to Login</button>
        </form>
    </div>
);
};
export default Registration;
