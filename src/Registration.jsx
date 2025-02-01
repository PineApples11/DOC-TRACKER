const Registration = () => {
   //const [id,setId] = useState("");
   const [name,setName] = useState("");
   const [password,setPassword] = useState("");
   
    const handleSubmit = (e) => {e.preventDefault();
        let data = {name,password};//declairing an object 
        

    return (
    <div>
         
        <div className="registration-form">
            <form>
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
