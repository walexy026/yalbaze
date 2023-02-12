import "./App.css";
import { Header } from "./Components/Header/Header";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Priotize } from "./Components/Priotize/Priotize";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Priotize />
    </div>
  );
}

export default App;
