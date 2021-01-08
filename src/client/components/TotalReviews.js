import React, { useState, useEffect } from "react";
import { ReviewRating } from "./ReviewRating";

export function TotalReview() {
  const [totalReview, setTotalReview] = useState([]);
  const [data, setData] = useState([]);

  const fetchURL = "/api/reviews";

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setTotalReview(data));
  }, []);

  const mealData = () => fetch("/api/meals").then((res) => res.json());

  useEffect(() => {
    mealData().then((data) => setData(data));
  }, [totalReview]);

  const mealsName = data?.map((meal) => {
    return { title: meal.title, id: meal.id };
  });

  console.log(mealsName);

  return (
    <div className="treview-list">
      {totalReview.map((item) => (
        <ul key={item.id} className="meal-list2">
          {mealsName
            .filter((x) => x.id === item.mealId)
            .map((x) => (
              <li key={x.id}>Meal: {x.title}</li>
            ))}
          <li>Comments: {item.content}</li>
          <li>Name: {item.name}</li>
          <li style={{ width: "30%", margin: "10px 0 10px 0" }}>
            <ReviewRating ratedAmount={item.numberOfStars * 2} />
          </li>
        </ul>
      ))}
    </div>
  );
}
