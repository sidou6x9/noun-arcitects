import React from "react";
import Hero from "./Hero";
import "./Home.css";
import ContactUsSection from "../../Components/Contactus/ContactUsSection";
import Section1 from "./Section1";
import { Button, Stack } from "@mui/material";

function Home() {
  return (
    <div className="home-container">
      <Hero />

      <Section1 />
      <ContactUsSection />
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="success">
          help me
        </Button>
        <Button variant="contained" color="secondary">
          suck me
        </Button>
        <Button variant="contained" color="primary">
          fun me
        </Button>
      </Stack>
    </div>
  );
}

export default Home;
