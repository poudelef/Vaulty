import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User_info.css";

export function User_info() {
    const navigate = useNavigate();
useEffect(() => {
    console.log("User_info component rendered");
}, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
    // Sends successful submission, naviagte to Find_people page
    navigate("/Find_people");
  };

  return (
    <div className="user-info-container">
      <h1>User Information</h1>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <h2>Address</h2>
        <div className="form-group">
          <label htmlFor="address">Street Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>

        <h2>Bank Information</h2>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name:</label>
          <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="routingNumber">Routing Number:</label>
          <input type="text" id="routingNumber" name="routingNumber" value={formData.routingNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default User_info;