import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={hero} className="hero-img" alt="UK University" />
      <div className="hero-text">
        <h1>Your Trusted UK Abroad Consultancy</h1>
        <p>Transparent • Legal • Student-Centered Guidance</p>
        <a href="/register" className="btn">Apply Now</a>
      </div>

      <section className="info">
        <h2>Why Choose Simply Abroad?</h2>
        <p>
          We provide ethical and transparent guidance for students aspiring to
          study in the United Kingdom. All guidance is aligned with UKVI norms.
        </p>
      </section>
    </div>
  );
};

export default Home;
