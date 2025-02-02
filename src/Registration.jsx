import { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

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
    <div>
         
        <div className="registration-form">
        <h1>Welcome to the Registration Page</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name<span className="name-span"></span></label>
                    <input type="text" value = {name} onChange={e=>setName(e.target.value)} className="name-input"  placeholder="Enter your name" />
                </div>
        
                <div className="form-group">
                    <label className="password-span">Password</label>
                    <input  type="password"  value = {password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        </div>
        
    </div>
    )
}

export default Registration;
