// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Optional: Custom styles for background

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({ ...errors, [name]: '' }); // Clear error when user types
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        // Validate fields
        for (const field in formData) {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
                isValid = false;
            }
        }

        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (isValid) {
            setSuccessMessage('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '' }); // Clear form
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">User Form</h2>
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        </div>
    );
};

export default App;
