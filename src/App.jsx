import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Bottom from "./Bottom.jsx";
import Portfolio from "./Portfolio.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#232426] text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Bottom />
    </div>
  );
}

export default App;
