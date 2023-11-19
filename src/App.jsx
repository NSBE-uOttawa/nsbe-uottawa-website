import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features.jsx";
import EventsHomePage from "./components/Events/EventsHomePage.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
//import Section from "./components/reactScroll.jsx";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <EventsHomePage />
      <FAQ />
      {/* <Section /> */}
    </div>
  );
}
