import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
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
    </>
  );
}

export default App;
