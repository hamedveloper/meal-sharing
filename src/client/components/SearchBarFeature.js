import React, { useState, useEffect, useContext } from "react";
import { SetSearchContext } from "./HomePage";
import { SearchContext } from "./HomePage";

// export const SearchContext = React.createContext();

export function SearchBarFeature() {
  const search = useContext(SearchContext);
  const setSearch = useContext(SetSearchContext);

  console.log(search);

  return (
    <input
      type="text"
      className="searchbar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search your meal here"
    ></input>
  );
}
