import React from "react";
import "./HomePage.css";
import logo from "./../assets/images/mealsharing.png";
import { SearchBarFeature } from "./SearchBarFeature";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export function NavigateBar() {
  return (
    <nav>
      <img
        src={logo}
        alt="Meal Sharing"
        width="20%"
        style={{ borderRadius: "30px" }}
      />
      <SearchBarFeature />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <a href="./meals">Add a Meal</a>
        </li>
        <li>
          <a href="./reviews">Reviews</a>
        </li>
        <li>
          <a href="./contactus">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}
