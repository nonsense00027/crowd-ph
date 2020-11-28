import React from "react";
import "./Home.css";
import curve from "../../img/curve-hero.svg";
import { Container } from "@material-ui/core";
import Hero from "./Hero";
import Features from "./Features";

function Home() {
  return (
    <div className="home">
      <Container className="home__content">
        <Hero />
        <Features />
      </Container>
      <footer>
        <h3>Hackfest 2020</h3>
      </footer>
    </div>
  );
}

export default Home;
