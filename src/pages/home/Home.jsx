import React from "react";
import Hero from "./Hero";
import "./Home.css";
import ContactUsSection from "../../Components/Contactus/ContactUsSection";
import Section1 from "./Section1";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Section1 />
      <ContactUsSection />
    </div>
  );
}

export default Home;
