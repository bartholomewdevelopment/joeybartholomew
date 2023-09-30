import React, { useState } from 'react';
import '../Contact.css'; // Assuming you will have a separate CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement a function to send this data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: joey@bartholomewdevelopment.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
