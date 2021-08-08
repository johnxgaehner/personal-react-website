import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
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

      <footer className="footer">Ⓒ 2021 John-Lucas Goehner</footer>
    </div>
  );
}

export default App;
