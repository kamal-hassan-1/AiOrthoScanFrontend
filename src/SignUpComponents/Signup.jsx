import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './logo.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, age, gender, email, password } = formData;

    // Full Name Validation
    if (!/^[a-zA-Z\s]+$/.test(fullName.trim())) {
      alert("Full Name must not contain digits and should not be empty");
      return;
    }

    // Age Validation: must be a number between 0 and 150
    const ageValue = parseInt(age);
    if (isNaN(ageValue) || ageValue < 0 || ageValue > 150) {
      alert("Age must be a number between 0 and 150");
      return;
    }

    // Gender Validation
    if (!gender) {
      alert("Please select a gender");
      return;
    }

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number."
      );
      return;
    }

    try {
      // Make a POST request to the signup endpoint
      const response = await axios.post('https://aiorthoscanbackend-production.up.railway.app/api/auth/signup', {
        fullName,
        age,
        gender,
        email,
        password,
      });

      if (response.status === 201) {
        // Successful signup
        alert("User registered successfully. Proceeding to the login page.");
        navigate('/');
      }
    } catch (error) {
      // Handle errors (e.g., server issues or validation errors)
      console.error(error.response?.data?.error || 'An error occurred');
      setErrorMessage(error.response?.data?.error || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="w-[100vw] min-h-screen bg-background-blue flex flex-col items-center justify-center gap-[20px]">
      <img src={Logo} alt="Logo" className="w-[80px]" />
      <div className="bg-login flex flex-col gap-[5px] px-[20px] items-center justify-center py-[10px] rounded-[10px]">
        <h2 className="text-white">Sign Up</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              required
              className="input bg-input-color"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              required
              className="input bg-input-color"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              required
              className="input bg-input-color"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="input bg-input-color"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="input bg-input-color"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn w-[100%] h-[45px] bg-blue-500 flex justify-center items-center rounded-[5px]"
          >
            Sign Up
          </button>
          <Link to="/" className="link text-blue-500">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
