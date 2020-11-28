import { Container } from "@material-ui/core";
import React from "react";
import "./Establishments.css";
import { useStateValue } from "../../DataLayer";
import { EstablishmentList } from "./EstablishmentList";

function Establishments() {
  const [{ establishments }] = useStateValue();
  return (
    <div className="establishments">
      <Container>
        <EstablishmentList establishments={establishments} />
      </Container>
    </div>
  );
}

export default Establishments;
