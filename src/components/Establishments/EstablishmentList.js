import React, { memo } from "react";
import "./EstablishmentList.css";
import Establishment from "./Establishment";

export const EstablishmentList = memo(({ establishments }) => {
  return (
    <div className="establishmentList">
      {establishments.map((establishment) => (
        <Establishment key={establishment.id} establishment={establishment} />
      ))}
    </div>
  );
});
