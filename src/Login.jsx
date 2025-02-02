import {useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const[name , setName] = useState("");
    const[password , setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
            },[]);

    const validate=()=>{
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
    <div>
      <h1>Login here</h1>
       <div>
        <form onSubmit={ProceedLogin}> 
            <div>
                <label>username:</label>
                <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter your username" name="username" required/>
            </div>
            <div>
                <label>Password:</label>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your password" name="password" required/>
            </div>
            <div>
                <button type="submit">Login</button>
                <Link to={'/register'}> New Doctor</Link>
            </div>
        </form>
       </div>

    </div>
    )
}

export default Login;
