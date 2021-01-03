import React, { useState } from "react";
import "./HomePage.css";
import { MealsList } from "./MealsList";
import { NavigateBar } from "./NavigateBar";

export const SearchContext = React.createContext();
export const SetSearchContext = React.createContext();

export function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <SetSearchContext.Provider value={setSearch}>
        <section className="header">
          <NavigateBar className="NavbarItems" />
          <h1> Meal Sharing App </h1>
          <p>
            here is the amazing place to inform you about making briliant event
            meal making. You can select what you want and invite your friends if
            you found the event funny.
          </p>
          <MealsList />
          <section style={{ marginTop: "20px" }}>
            <footer>
              <p>All rights reserved</p>
            </footer>
          </section>
        </section>
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  );
}
