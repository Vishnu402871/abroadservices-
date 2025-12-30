function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Study & Settle Abroad</h1>
      <p>Trusted experts for education, visa & migration services</p>
      <button style={styles.btn}>Get Free Counselling</button>
    </section>
  );
}

const styles = {
  hero: {
    height: "85vh",
    background: "linear-gradient(to right, #0a1cff, #4facfe)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  btn: {
    marginTop: "25px",
    padding: "14px 35px",
    border: "none",
    borderRadius: "6px",
    background: "white",
    color: "#0a1cff",
    fontSize: "16px",
    fontWeight: "600"
  }
};

export default Hero;
