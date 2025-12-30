const Admin = () => {
  const data = JSON.parse(localStorage.getItem("studentApplication"));

  return (
    <div className="page">
      <h2>Admin – Student Applications</h2>

      {!data ? (
        <p>No student applications found.</p>
      ) : (
        <table className="admin-table">
          <tbody>
            <tr><th>Name</th><td>{data.name}</td></tr>
            <tr><th>Email</th><td>{data.email}</td></tr>
            <tr><th>Phone</th><td>{data.phone}</td></tr>
            <tr><th>Qualification</th><td>{data.qualification}</td></tr>
            <tr><th>University</th><td>{data.university}</td></tr>
            <tr><th>Year</th><td>{data.year}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
