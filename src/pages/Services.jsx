import Card from "./Card";
const Services = () => {
  return (
    <div className="page">
      <h2>Our UK Consulting Services</h2>

      <div className="card-container">
        <Card
          title="UK Student Visa Guidance"
          text="Complete visa guidance strictly following UKVI regulations."
        />
        <Card
          title="University Admissions"
          text="Expert support for selecting and applying to UK universities."
        />
        <Card
          title="SOP & Documentation"
          text="Professional assistance for SOP, LOR, and academic documents."
        />
      </div>
    </div>
  );
};

export default Services;
