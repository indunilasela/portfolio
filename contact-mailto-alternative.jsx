import React, { useState, useRef, useEffect } from 'react';

// This is an alternative contact page that uses mailto: instead of EmailJS
// Replace your contact.jsx with this if you want a simpler solution

// ... (keep all your icon components the same) ...

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio website contact form.
    `;
    
    const mailtoLink = `mailto:i.asela919@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // ... (rest of your component remains the same) ...
  
  return (
    // ... (your existing JSX) ...
  );
};

export default ContactPage;
