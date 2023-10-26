import React, { useState } from 'react';

const EmailForm = () => {
  // State to keep track of form data
  const [formData, setFormData] = useState({
    from: "lablnk_help@outlook.com",
    to: '',
    subject: 'Lab Link Password Reset',
    html: 'Dear user, your verification code is: 534 781. Thank you for your interest in lablink!',
  });

  // State to handle response message
  const [response, setResponse] = useState('');

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the serverless function
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Error handling with the response
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      // Update state with the success response (can be customized based on your backend response)
      setResponse('Email sent successfully!');

      // Optionally, clear the form after successful submission
      setFormData({
        from: "lablnk_help@outlook.com",
        to: '',
        subject: 'Lab Link Password Reset',
        html: 'Dear user, your verification code is: 534 781. Thank you for your interest in lablink!',
      });
    } catch (error) {
      // Update state with error message
      setResponse(`There was an error sending the email: ${error.message}`);
    }
  };

  // Render the form
  return (
    <div>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="to"
          placeholder="Recipient's email"
          value={formData.to}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Email</button>
      </form>
      {response && <p>{response}</p>} {/* Display the response message if available */}
    </div>
  );
};

export default EmailForm;
