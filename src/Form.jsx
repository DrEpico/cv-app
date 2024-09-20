// import React from 'react';

function Form({ formData, handleChange }) {
  return (
    <form>
      <div className="form-row">
        <label>
          First name
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last name
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
      </div>
      <br />
      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
    </form>
  );
}

export default Form;