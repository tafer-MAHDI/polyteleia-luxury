import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;