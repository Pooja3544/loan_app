import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const loanTypes = ['Home Loan', 'Business Loan', 'Personal Loan'];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: loanTypes[0] });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // expected endpoint on backend to send email
      await axios.post('/api/send-enquiry', form);
      setStatus('Submitted successfully!');
    } catch (err) {
      setStatus('Submission failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Enquire Now</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <select name="product" value={form.product} onChange={handleChange}>
        {loanTypes.map((t, i) => <option key={i}>{t}</option>)}
      </select>
      <button type="submit">Submit</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default ContactForm;
