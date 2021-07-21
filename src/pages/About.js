import "./About.css";

export default function About() {
  return (
    <section>
      <p className="about-text">
        Hi! I'm John. Soon-to-be web developer. Right now attending the
        neuefische bootcamp to learn the tools to be able to translate ideas
        into code. Focussing on design and interaction.
      </p>
      <div className="about-skillset">
        <p>current skill set.</p>
        <ul className="about-skillset__list">
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>PATIENCE</li>
          <li>MOTIVATION</li>
        </ul>
      </div>
    </section>
  );
}
