import React, { useState } from "react";
import { Link } from "react-router-dom";
import Person from "../../assets/PersonIcon.svg";
import { signup } from "../../authServices/authServices";
import Lottie from "react-lottie";
import loadingAnimation from "../../assets/loadingAnimation.json"; 

// Lottie animation options
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        dob: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const data = await signup(formData);

            if (data.error) {
                setError(data.error);
            } else {
                alert('Sign-up successful!');
                // You might want to redirect to another page here
            }
        } catch (err) {
            setError('Network error occurred');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="welcome-screen">
            <div className="center-container">
                <h1 className="welcome-text">ENTER <br /> YOUR DETAILS</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="input-field"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input-field"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="input-field"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        className="input-field"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        placeholder="DOB"
                        className="input-field"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    <button type="submit" className="login-button phone-login" disabled={isLoading}>
                        <div className="icon-circle">
                            <img
                                src={Person}
                                alt="Person Icon"
                                width="24"
                                height="24"
                            />
                        </div>
                        <div className="text-container">Sign Up</div>
                    </button>
                    {isLoading && (
                        <div className="loading-animation">
                            <Lottie options={defaultOptions} height={100} width={100} />
                        </div>
                    )}
                    {error && <p className="error-text">{error}</p>}
                </form>
                <p className="signup-text">
                    Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;