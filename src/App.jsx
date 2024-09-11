import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div style={{ background: "#000000" }}>
      <NavBar />
      <Home />
      <Skills />
      <Works />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
