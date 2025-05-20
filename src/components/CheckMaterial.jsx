function CheckMaterial() {
  return (
    <div className="form-container">
        <input placeholder="Name of the subject" />
      <input placeholder="Name of the Author" />
      <input placeholder="Status" />
       <h2>Available Study Materials</h2>
        <ul>
        <li>📄 Math Notes</li>
        <li>📄 Physics PPT</li>
        <li>📄 Chemistry PDF</li>
      </ul>
    </div>
  );
}
export default CheckMaterial;
