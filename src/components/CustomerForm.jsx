import React, { useState, useEffect } from 'react';
import './CustomerForm.css';

const bgImages = [
  require('../assets/img1.jpg'),
  require('../assets/img2.jpg'),
  require('../assets/img1.jpg')
];

const CustomerForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Personal Loan'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage('✅ Submitted successfully!');
        setFormData({ name: '', phone: '', email: '', requirement: 'Personal Loan' });
      } else {
        setMessage('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Something went wrong.');
    }
  };

  return (
    <div
      className="form-section"
      style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
    >
      <div className="form-container">
        <h2>Apply for a Loan</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" required placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input type="tel" name="phone" required placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email ID (optional)" value={formData.email} onChange={handleChange} />
          <select name="requirement" value={formData.requirement} onChange={handleChange}>
            <option>Personal Loan</option>
            <option>Home Loan</option>
            <option>Business Loan</option>
          </select>
          <button type="submit">Submit</button>
          {message && <p className="status">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
