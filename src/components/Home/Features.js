import React from "react";
import "./Features.css";
import data from "../../img/data.svg";
import gps from "../../img/gps.svg";
import plan from "../../img/plan.svg";
import monitor from "../../img/monitor.svg";
function Features() {
  return (
    <div className="features">
      <div className="features__row">
        <div className="features__item">
          <img src={monitor} alt="" />
          <h3>Monitor / Track</h3>
          <p>Monitor occupancy count of establishments.</p>
        </div>
        <div className="features__item">
          <img src={plan} alt="" />
          <h3>Plan ahead</h3>
          <p>Plan ahead on where establishment should you go.</p>
        </div>
      </div>
      <div className="features__row">
        <div className="features__item">
          <img src={data} alt="" />
          <h3>Statistics</h3>
          <p>
            Check and Review statistical analysis on the crowded establishments.
          </p>
        </div>
        <div className="features__item">
          <img src={gps} alt="" />
          <h3>Location</h3>
          <p>
            Provides navigation towards the establishment from your location.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
