import { Button } from "@material-ui/core";
import React from "react";
import "./Hero.css";
import track from "../../img/track.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

function Hero() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/establishments");
  };
  return (
    <div className="hero">
      <img src={track} alt="" />
      <h1 className="hero__title">Track the Crowd</h1>
      <p className="hero__phrase">
        Crowd.ph is a crowd monitoring web application that offers realtime
        person count for every registered establishments in the city.
      </p>
      <Button className="hero__button" onClick={handleClick}>
        get started <ArrowForwardIcon />{" "}
      </Button>
    </div>
  );
}

export default Hero;
