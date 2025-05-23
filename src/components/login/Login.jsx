// src/pages/LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { io } from 'socket.io-client';

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const socket = io("http://localhost:8000");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData2 = {
            identifier: formData.username || formData.email,
            password: formData.password
        }

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login",
                formData2,
                { withCredentials: true }
            );

            const { data } = response;
            const token = data.token;
            console.log("Login completed", response.data)

            socket.emit("joinRoom", token, (response) => {
                if (response.success) {
                    console.log("Joined the chat room successfully");
                } else {
                    console.error("Failed to join the chat room:", response.message);
                }
            });
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div>
            <div className="home">
                <a className='back' href="/">PsychoGuru</a>
            </div>
            <div className="login">
                <div className="container_2_login">
                    <img className='login_image' src="src\components\login\2023-08-14-v3-Make-it-easier-for-your-clients-1200.webp" alt="" />
                </div>
                <div className="container_1_login">
                    <h2 className="main_login">Login</h2>
                    <div className="heading_login">
                        <h3 className="sub_login">Let's start again with more strength.</h3>
                        <h3 className="sub_login">Welcome back!!</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input className="login_input"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username or email"
                            />
                        </div>
                        <div className="form-group">
                            <input className="login_input"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button className='login_button' type="submit">Login</button>
                    </form>
                    <p className="last_login">
                        Don't have an account? <a className="signup_signup" href="/register">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
