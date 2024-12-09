import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WoodworkSection from "../components/WoodworkSection";
import Chairs from "../components/Chairs";
import ProfessionalFurniture from "../components/ProfessionalFurniture";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <WoodworkSection />
      <Chairs />
      <ProfessionalFurniture />
      <Contact />
    </div>
  );
};

export default Index;