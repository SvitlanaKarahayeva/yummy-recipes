import React, { Component } from 'react';
import userService from '../../services/userService';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',

           }
    }

    handleChange= (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // login comes from services  
          await userService.login(this.state);
        //   updates user state to the state of who logged in
          this.props.handleRegisterOrLogin()
        //   redirect to the home page after login
        console.log(this.props)
        this.props.history.push('/')
        } catch (err) {
          console.log(err);
        }
      };
    render() {
        return (

            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <span className="loginTitle"> Login</span>
                    <label>Email</label>
                    <input 
                        className="loginInput" 
                        type="email" 
                        placeholder="Enter Your Email"
                        name="email"
                        onChange={this.handleChange}
                    />

                    <label>Password</label>
                    <input 
                        className="loginInput" 
                        type="password" 
                        placeholder="Enter Your Password"
                        name="password"
                        onChange={this.handleChange}
                    />

                    <button className="loginButton">Login</button>
                </form>
                <span className="loginRegSpan">Dont have an account?</span>
                <button className="loginRegisterButton">Register</button>
            </div>
        )
    }
}

export default LoginPage;