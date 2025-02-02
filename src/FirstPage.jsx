import { Link } from "react-router-dom";

const FirstPage = () => {
    
    return (
        <div>
            <h3>Welcome</h3>
            <h1>DOC TRACKER</h1>
            <p>Please choose an option:</p>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};

export default FirstPage;
