import "./App.css";
import Div100vh from "react-div-100vh";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Div100vh id="home">
        <Home />
      </Div100vh>
      <Div100vh id="about">
        <About />
      </Div100vh>
      <Div100vh id="contact">
        <Contact />
      </Div100vh>

      <Footer />
    </div>
  );
}

export default App;
