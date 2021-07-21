import "./App.css";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>John-Lucas Goehner</h1>
        <nav className="header__navigation">
          <NavLink exact to="/">
            JLG
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <Link className="footer__imprint" to="">
          Imprint
        </Link>
        <p className="footer__copyright">Ⓒ 2021 John-Lucas Goehner</p>
      </footer>
    </div>
  );
}

export default App;
