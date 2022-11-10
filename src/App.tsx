import styled from "styled-components";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SocialNetworksWidget from "./ui-reusable/SocialNetworksWidget";

function App() {
  return (
    <>
      <NavBar />
      <SocialNetworksWidget />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
