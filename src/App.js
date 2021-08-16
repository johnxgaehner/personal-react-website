import "./App.css";
import Div100vh from "react-div-100vh";
import { Link } from "react-scroll";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
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
      </header>

      <Div100vh id="home">
        <Home />
      </Div100vh>
      <Div100vh id="about">
        <About />
      </Div100vh>
      <Div100vh id="contact">
        <Contact />
      </Div100vh>

      <footer className="footer">Ⓒ 2021 John-Lucas Goehner</footer>
    </div>
  );
}

export default App;
