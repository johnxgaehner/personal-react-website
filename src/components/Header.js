import { Link } from "react-scroll";

export default function Header() {
  <header className="header">
    <nav className="header__navigation">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={10}
        duration={500}
      >
        <h1>John-Lucas Goehner</h1>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={10}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={10}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  </header>;
}
