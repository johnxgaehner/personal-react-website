import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact__links">
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </section>
      <section className="contact__info">
        <ul>
          <li>john.goehner@gmx.de</li>
          <li>+49 177 3127043</li>
          <li>Hamburg, Germany</li>
        </ul>
      </section>
    </div>
  );
}
