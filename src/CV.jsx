function CV({ formData }) {
  return (
    <div>
      <h2>CV</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default CV;