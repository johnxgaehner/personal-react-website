import "./Contact.css";
import Div100vh from "react-div-100vh";

export default function Contact() {
  return (
    <Div100vh>
      <section className="contact">
        <ul>
          <li className="contact__info--large-item">john.goehner@gmx.de</li>
          <li className="contact__info--large-item">+49 177 3127043</li>
          <li className="contact__info--large-item">Hamburg, Germany</li>
        </ul>
      </section>
    </Div100vh>
  );
}
