import React, { useEffect, useState } from "react";
import "./Information.css";
import Geolocation from "./Geolocation";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import { collectIdsAndDocs } from "../../utilities";
import { CircularProgress } from "@material-ui/core";

function Information() {
  const { establishmentId } = useParams();
  const [establishment, setEstablishment] = useState();

  useEffect(() => {
    db.collection("establishments")
      .doc(establishmentId)
      .onSnapshot((snapshot) => {
        setEstablishment(collectIdsAndDocs(snapshot));
      });
  }, [establishmentId]);

  console.log("information", establishment);

  return (
    <div className="information">
      {establishment ? (
        <Geolocation
          x_coordinates={establishment.x_coordinates}
          y_coordinates={establishment.y_coordinates}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Information;
