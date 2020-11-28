import React, { useEffect } from "react";
import "./Geolocation.css";

function Geolocation({ x_coordinates, y_coordinates }) {
  let userLatitude = 0;
  let userLongitude = 0;
  let origin = 0;
  let destination = 0;
  let mapLink = "";

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(recordPosition);
    } else {
      alert("Geolocation is not supported by the browser");
    }
  };

  const recordPosition = (position) => {
    console.log("Position is: ", position);
    var div = document.getElementById("geo-map");
    var map = document.createElement("iframe");
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    origin = userLatitude + "," + userLongitude;
    destination = x_coordinates + "," + y_coordinates;
    console.log("origin is: ", origin);
    console.log(x_coordinates, " - ", y_coordinates);
    mapLink = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBoWOCh2dOIYsCwSp5d3iUvZPOEUNThKFI
    &origin=${origin}
    &destination=${destination}`;
    renderMap();
  };

  const renderMap = () => {
    var div = document.getElementById("geo-map");
    var map = document.createElement("iframe");
    map.width = "100%";
    map.height = "100%";
    map.frameBorder = "0";
    map.onload =
      'javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));';
    map.setAttribute("src", mapLink);
    div.appendChild(map);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <div className="container" id="geo-map"></div>;
}
export default Geolocation;
