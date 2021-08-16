import "./App.css";
import { NavLink } from "react-router-dom";
import Div100vh from "react-div-100vh";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header__navigation">
          <NavLink exact to="/">
            <h1>John-Lucas Goehner</h1>
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <Div100vh>
        <Home />
      </Div100vh>
      <Div100vh>
        <About />
      </Div100vh>
      <Div100vh>
        <Contact />
      </Div100vh>

      <footer className="footer">Ⓒ 2021 John-Lucas Goehner</footer>
    </div>
  );
}

export default App;
