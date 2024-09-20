import { useState } from 'react';
import Form from './Form';
import CV from './CV';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    //General Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    //Education
    Degree: '',
    schoolName: '',
    course: '',
    eduStart: '',
    eduEnd: '',
    //Work Experience 
    title: '',
    company: '',
    city: '',
    workStart: '',
    workEnd: '',
    description: '',
  });//how are more than one education or work experience managed dynamically

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