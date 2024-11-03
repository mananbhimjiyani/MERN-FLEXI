import React from "react";
import {Link} from "react-router-dom";
import Person from "../../assets/PersonIcon.svg";

function SignUp() {
    return (
        <div className="welcome-screen">
            <div className="center-container">
                <h1 className="welcome-text">ENTER <br /> YOUR DETAILS</h1>
                <input type="text" placeholder="First Name" className="input-field"/>
                <input type="text" placeholder="Last Name" className="input-field"/>
                <input type="email" placeholder="Email" className="input-field"/>
                <input type="password" placeholder="Password" className="input-field"/>
                <input type="tel" placeholder="Phone" className="input-field"/>
                <input type="text" placeholder="Gender" className="input-field"/>
                <input type="date" placeholder="DOB" className="input-field"/>
                <button className="login-button phone-login">
                    <div className="icon-circle">
                        <img
                            src={Person}  // Replace with your actual phone icon URL or import path
                            alt="Person Icon"
                            width="24"
                            height="24"
                        />
                    </div>
                    <div className="text-container">Sign Up</div>
                </button>
                <p className="signup-text">
                    Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
