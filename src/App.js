import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Establishments from "./components/Establishments/Establishments";
import Information from "./components/Information/Information";
import { db } from "./Firebase";
import { useStateValue } from "./DataLayer";
import { types } from "./Reducer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("establishments").onSnapshot((snapshot) => {
      dispatch({
        type: types.GET_ESTABLISHMENTS,
        payload: snapshot.docs,
      });
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/establishments/:establishmentId">
            <Information />
          </Route>

          <Route path="/establishments" exact>
            <Establishments />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
