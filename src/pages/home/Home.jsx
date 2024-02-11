import React from "react";
import "./Home.css";
import Hero from "./hero/Hero";
import AproposSection from "./aproposdenous/AproposSection";
import Section1 from "./section1/Section1";
import ContactUsSection from "./contactUsSection/ContactUsSection";
function Home() {
  return (
    <div className="home">
      <Hero />
      <AproposSection />
      <Section1 />
      <ContactUsSection />
    </div>
  );
}

export default Home;
