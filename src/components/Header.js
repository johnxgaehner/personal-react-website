import { Link } from "react-scroll";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <nav className="Header__navigation">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h1>John-Lucas Goehner</h1>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
