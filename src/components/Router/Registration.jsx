import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
function Registration({ eventId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more fields as needed for registration
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3200/registerEvent/${eventId}`, formData)
      .then(response => {
        console.log('Registration successful!', response.data);
        // You can handle success here, e.g., show a success message
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // You can handle errors here, e.g., show an error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className='input_fields'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
           Date Of Birth:
          <input
          type="Date"
          name="DOB"
          value={formData.DOB}
          onChange={handleChange}
        />
      </label>

      <br />
      {/* Add more input fields for other registration details */}
      <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default Registration;
