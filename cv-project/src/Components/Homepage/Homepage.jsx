import React, { useState } from 'react';
import './Homepage.css';

let Homepage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${formData.name} and Email: ${formData.email}`);
  };

  return (
    <div className="content_wrap">
      <div className="left_wrap">
        <span className='banner_text'>Lorem ipsum<br/> dolor sit</span>
      </div>
      <div className="right_wrap">
        <div className="banner_form">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
