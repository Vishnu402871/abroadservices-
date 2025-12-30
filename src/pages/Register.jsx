const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      qualification: e.target.qualification.value,
      university: e.target.university.value,
      year: e.target.year.value,
    };

    localStorage.setItem("studentApplication", JSON.stringify(data));
    alert("Application submitted successfully!");
    e.target.reset();
  };

  return (
    <div className="page">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Full Name" required />
        <input name="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone Number" required />
        <input name="qualification" placeholder="Highest Qualification" />
        <input name="university" placeholder="University / College" />
        <input name="year" placeholder="Year of Passing" />
        <button type="submit">Submit</button>
      </form>

      <p className="disclaimer">
        * Final admission and visa decisions are subject to UKVI and university authorities.
      </p>
    </div>
  );
};

export default Register;
