import React, { Component } from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        //console.log(this.state)
        try {
            await userService.register(this.state);
            this.props.handleRegisterOrLogin()
        //redirect to the home page after registration
            console.log(this.props)
            this.props.history.push('/')
        } catch (err) {
            console.log(err);
        }
    };

    render(){
        return (
            <div className="register">
                <form className="registerForm" onSubmit={this.handleSubmit}>
                    <span className="registerTitle"> Registration form</span>
                    
                    <label>Name</label>
                    <input 
                        className="registerInput" 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        onChange={this.handleChange}
                    />
                    
                    <label>Email</label>
                    <input 
                        className="registerInput" 
                        type="email" 
                        placeholder="Enter Your Email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    
                    <label>Password</label>
                    <input 
                        className="registerInput" 
                        type="password" 
                        placeholder="Enter Your Password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    
                    <label>Confirm Password</label>
                    <input 
                        className="registerInput"  
                        type="password" 
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                    />
                    
                    <button className="registerButton">Register</button>
                
                </form>
                
                <span className="registerLoginSpan">If you have an account</span>
                <Link to="/login">
                    <button className="registerLoginButton">Login</button>
                </Link>
                
            </div>
        )
    }
   
}

export default RegisterForm;