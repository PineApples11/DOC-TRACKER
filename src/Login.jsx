import {useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import './App.css';



const Login = () => {
    const[name , setName] = useState("");//setting state for name and password
    const[password , setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();//clerning storage
            },[]);

    const validate=()=>{//making sure user puts correct input
        let result = true;
        if(name === ''){
            result = false;
            toast.warning('Please Entre Name');
        }if(password === ''){
            result = false;
            toast.warning('Please Entre password');

        }

        return result;


    }
    
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) { // checkingif inputs are correct
            fetch("http://localhost:3000/doctors") // Getting all doctors
                .then((res) => res.json()) //JSONify array 
                .then((data) => {
                    // Find user by name
                    const user = data.find((doctor) => doctor.name === name);
                    if (!user) {
                        toast.error("User Not Found");
                        return;}
                    
                    if (user) {
                        if (user.password === password) { // comparing entred password with stored password
                            toast.success("Login Successful");
                            sessionStorage.setItem("username", user.name);//storing data in browser temporarily
                            navigate("/"); // Redirect to Home page
                        } else {
                            toast.error("Invalid Password");
                        }
                    } 
                })
                .catch((err) => {
                    toast.error("Failed: " + err.message);
                });
        }
    };



    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={ProceedLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
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
                <button type="submit">Login</button>
                <Link to="/register" className="link">New Doctor? Register</Link>
            </form>
        </div>
    );
};

export default Login;
