const contactDetails = [
  ["GitHub", "NazerkeKenzhiyeva"],
  ["Instagram", "@nazlu00"],
  ["Location", "City of Unicorns"],
];

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="contact-heading">
        <p className="section-number">02 / Say hello</p>
        <h2 id="contact-title">Contact</h2>
      </div>

      <div className="contact-list">
        {contactDetails.map(([label, value]) => (
          <div className="contact-row" key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <p className="contact-signature">See you soon</p>
    </section>
  );
}

export default Contact;
