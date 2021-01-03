import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "./../assets/images/mealsharing.png";
import { SearchBar } from "./SearchBarList";
import { SearchBarFeature } from "./SearchBarFeature";

export function NavigateBar() {
  return (
    <nav className="NavbarItems">
      <img src={logo} alt="Meal Sharing" width="20%" />
      <SearchBarFeature />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./meals/addmeal">Add a Meal</a>
        </li>
        <li>
          <a href="./reservations">Reservations</a>
        </li>
        <li>
          <a href="./reviews">Reviews</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}
