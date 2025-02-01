import { useState } from "react";
import { toast } from "react-toastify";
const Registration = () => {
   //const [id,setId] = useState("");
   const [name,setName] = useState("");
   const [password,setPassword] = useState("");
   
    const handleSubmit = (e) => {e.preventDefault();
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
        }).catch((err)=>{
            toast.error("Failed :"+err.message);

        })

    }

    return (
    <div>
         
        <div className="registration-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name<span className="name-span"></span></label>
                    <input type="text" value = {name} onChange={e=>setName(e.target.value)} className="name-input"  placeholder="Enter your name" />
                </div>
        
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  value = {password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        </div>
        
    </div>
    )
}

export default Registration;
