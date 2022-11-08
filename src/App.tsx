import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import SocialNetworksWidget from "./ui-reusable/SocialNetworksWidget";

function App() {
  return (
    <>
      <NavBar />
      <SocialNetworksWidget />
      <Home />
    </>
  );
}

export default App;
