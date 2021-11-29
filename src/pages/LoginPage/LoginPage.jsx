import './LoginPage.css'

function LoginPage() {
    return (
        <div className="login">
            <form className="loginForm">
                <span className="loginTitle"> Login</span>
                <label>Email</label>
                <input className="loginInput" type="email" placeholder="Enter Your Email"/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter Your Password"/>
                <button className="loginButton">Login</button>
            </form>
            <span className="loginRegSpan">Dont have an account?</span>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}

export default LoginPage;