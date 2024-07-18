import React, { useState, useEffect } from 'react';
import './Contact_Us.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData])


    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                // trim() used to remove space in string
                if (!value.trim()) {
                    error = 'Company Name is required';
                }
                break;
            case 'address':
                if (!value.trim()) {
                    error = 'Address is required';
                }
                break;
            case 'phonenumber':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!/^\d+$/.test(value)) {
                    error = 'Phone number must be numeric';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email is invalid';
                }
                break;
            case 'message':
                if (!value.trim()) {
                    error = 'Message is required';
                }
                break;
            default:
                break;
        }
        return error;
    };


    const handleChange = (e) => {
        //console.log(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate the field and set the error message
        const error = validateField(name, value);
        setFormErrors({ ...formErrors, [name]: error });
    };

    const handleSubmit = (e) => {

        // This prevents page from reloading while submitting
        e.preventDefault();
        // Check for errors before submission
        const errors = {};
        Object.keys(formData).forEach((name) => {
            const error = validateField(name, formData[name]);
            if (error) {
                errors[name] = error;
            }
        });
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Handle form submission logic here
            console.log(formData);
            // Optionally, you can clear the form fields after submission
            setFormData({ name: '', address: '', phonenumber: '', email: '', message: '' });
            localStorage.removeItem('contactFormData'); // Clear local storage
        }
    };

    return (
        <div className="contact-form-container">
            <p className='bottom'>Fill this and Submit</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {formErrors.name && <span className="error">{formErrors.name}</span>}
                
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                {formErrors.address && <span className="error">{formErrors.address}</span>}
                
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                />
                {formErrors.phonenumber && <span className="error">{formErrors.phonenumber}</span>}
                
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
                
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {formErrors.message && <span className="error">{formErrors.message}</span>}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
