import './Register.css'

export default function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <span className="registerTitle"> Registration form</span>
                
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter unique username"/>
                
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Enter Your Email"/>
                
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter Your Email"/>
                
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter Your Password"/>
                
                <button className="registerButton">Register</button>
            
            </form>
            <span className="registerLoginSpan">If you have an account</span>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
