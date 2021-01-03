import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { SearchContext } from "./HomePage";
import { Reviews } from "./Reviews";
import { FiveStar } from "./FiveStar";

function StarRating() {
  return <div className="star-mealslist" />;
}

function StarRatingSelected() {
  return <div className="star-mealslist selected" />;
}

export function MealsList() {
  const search = useContext(SearchContext);
  const [data, setData] = useState(null);
  const stars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (search !== "") {
    var fetchURL = `api/meals?title=${search}`;
  } else fetchURL = "api/meals";

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => {
      data
        .map((x) => x.id)
        .map((x) =>
          fetch(`api/reviews/${parseInt(x)}`)
            .then((res) => res.json())
            .then((data) => {
              const numberofSelected = data.map(
                (item) => item["avg(`numberOfStars`)"]
              );
              setArray([
                ...array,
                { id: x, rating: parseInt(numberofSelected[0]) * 2 },
              ]);
            })
        );
      setData(data);
    });
  }, [search]);

  const history = useHistory();

  const routeChangeToReserve = (item) => {
    let path = `/meals/reservations/${item}`;
    history.push(path);
  };

  const routeChangeToReview = (item) => {
    let path = `/meals/reviews/${item}`;
    history.push(path);
  };

  const [array, setArray] = useState([]);

  return (
    <div>
      <div className="meal-list">
        {data?.map((item) => (
          <ul key={item.id}>
            <li>Title: {item.title}</li>
            <li>Description: {item.description}</li>
            <li>Created at: {item.createdAt}</li>
            <li>Price: {item.price} DKK</li>
            <li>Max number of guests: {item.number_of_guests} persons</li>
            <div>
              <div className="button-section">
                <button onClick={() => routeChangeToReserve(item.id)}>
                  Reserve
                </button>
                <button onClick={() => routeChangeToReview(item.id)}>
                  Review
                </button>
              </div>
              <div style={{ display: "flex" }} className="star-group">
                {stars.map((x, i) =>
                  2 < i ? (
                    <StarRating key={i} />
                  ) : (
                    <StarRatingSelected key={i} />
                  )
                )}
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
