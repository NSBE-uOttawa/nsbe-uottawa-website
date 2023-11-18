import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features.jsx";
import Events from "./components/Events/Events.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Section from "./components/reactScroll.jsx";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Events />
      <FAQ />
      <Section />
    </div>
  );
}
