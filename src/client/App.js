import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Reservations } from "./components/Reservations";
import { AddMeal } from "./components/AddMeal";
import { NavigateBar } from "./components/NavigateBar";
import { Reviews } from "./components/Reviews";
import { Star } from "./components/FiveStar";
import { TotalReview } from "./components/TotalReviews";
import { TotalReservations } from "./components/TotalReservations";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Switch>
        <Route path="/meals/reservations/:id">
          <NavigateBar />
          <br />
          <Reservations />
        </Route>
        <Route path="/meals/reviews/:id">
          <NavigateBar />
          <br />
          <Reviews />
        </Route>
      </Switch>
      <Route exact path="/meals/addmeal">
        <NavigateBar />
        <br />
        <AddMeal />
      </Route>
      <Route exact path="/reviews">
        <NavigateBar />
        <br />
        <TotalReview />
      </Route>
      <Route path="/reservations">
        <NavigateBar />
        <br />
        <TotalReservations />
      </Route>
    </Router>
  );
}

export default App;
