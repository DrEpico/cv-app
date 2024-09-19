import React, { useState } from 'react';
import Form from './Form';
import CV from './CV';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="app">
      <div className="form-container">
        <Form formData={formData} handleChange={handleChange} />
      </div>
      <div className="cv-container">
        <CV formData={formData} />
      </div>
    </div>
  );
}

export default App;