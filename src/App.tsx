import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LoaderPage from "./pages/LoaderPage";
import Projects from "./pages/Projects";
import CursorPerso from "./ui-reusable/CursorPerso";
import SocialNetworksWidget from "./ui-reusable/SocialNetworksWidget";

function App() {
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 1000);
    return;
  }, []);

  return (
    <>
      {load ? (
        <LoaderPage />
      ) : (
        <>
          <NavBar />
          <SocialNetworksWidget />
          <Home />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
