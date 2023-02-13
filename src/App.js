import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Priotize } from "./Components/Priotize/Priotize";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Priotize />
      <Footer />
    </div>
  );
}

export default App;
