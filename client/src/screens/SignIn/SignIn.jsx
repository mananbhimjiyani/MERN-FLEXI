import React from "react";
import {Link} from "react-router-dom";
import Person from "../../assets/PersonIcon.svg";

function SignIn() {
    return (
        <div className="welcome-screen">
            <div className="center-container">
                <h1 className="welcome-text">ENTER <br />YOUR DETAILS</h1>
                <input type="email" placeholder="Email" className="input-field"/>
                <input type="password" placeholder="Password" className="input-field"/>
                <button className="login-button phone-login">
                    <div className="icon-circle">
                        <img
                            src={Person}  // Replace with your actual phone icon URL or import path
                            alt="Person Icon"
                            width="24"
                            height="24"
                        />
                    </div>
                    <div className="text-container">Sign In</div>
                </button>
                <p className="signup-text">
                    Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
