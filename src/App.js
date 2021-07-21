import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink exact to="/">
            JLG
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/contact">Contact</Route>
          <Route path="/">JLG</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
