function UploadMaterial() {
  return (
    <div className="form-container">
      <h2>Upload Material</h2>
       <input placeholder="Name of the subject" />
      <input placeholder="Date of Upload" type="date"/>
      <input placeholder="No.of Pages"/>
      <input type="file" />
      <button>Upload</button>
    </div>
  );
}
export default UploadMaterial;
