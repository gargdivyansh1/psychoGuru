// src/pages/SignupPage.js
import React, { useState } from "react";
import axios from "axios";
import './Register.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        role: "user", // default is user
        companyName: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/auth/register",
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }, 
                    withCredentials: true
                });
                
            const { data } = response;
            console.log("Registration completed", response.data)

            // Redirect user to the login page after successful registration
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div>
            <div className="home">
                <a className='back' href="/">PsychoGuru</a>
            </div>
            <div className="signup">
                <div className="container_1">
                    <h2 className="main">Sign Up</h2>
                    <div className="heading">
                        <h3 className="sub">Give us a chance to know you better.</h3>
                        <h3 className="sub">Let's Connect</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <input className="register_input"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input className="register_input"
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input className="register_input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input className="register_input"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select name="role" value={formData.role} onChange={handleChange}>
                                <option value="user">User</option>
                                <option value="serviceProvider">Service Provider</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                        {formData.role !== "user" && (
                            <div className="form-group">
                                <input className="register_input"
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Enter your company name"
                                />
                            </div>
                        )}
                        {error && <p className="error-message">{error}</p>}
                        <button className="submit_button" type="submit">Sign Up</button>
                    </form>
                    <p className="last">
                        Already have an account? <a className="login_login" href="/login">Login</a>
                    </p>
                </div>
                <div className="container_2">
                    <img className='register_image' src="src\components\register\clockwork-2953852_1280.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Register;
