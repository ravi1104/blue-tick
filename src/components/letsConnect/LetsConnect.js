import React, { useState } from 'react';
import styles from './letsConnect.module.css';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="lets-connect" className={styles.letsConnect}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <button  type="submit" className={styles.submitButton}>Submit form</button>
      </form>
      <div>
        <img src='./ai.png' alt='ai' />
      </div>
    </section>
  );
}

export default LetsConnect;
