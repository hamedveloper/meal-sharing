import React, { useState, useEffect, useContext } from "react";

export function TotalReview() {
  const [totalReview, setTotalReview] = useState([]);

  const fetchURL = "http://localhost:5000/api/reviews";

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setTotalReview(data));
  }, []);
  return (
    <div>
      {totalReview.map((item) => (
        <ul key={item.id} className="review-list">
          <li>Comments: {item.content}</li>
          <li>Created at: {item.createdAt}</li>
          <li>Score: {item.numberOfStars}/5</li>
          <br />
        </ul>
      ))}
    </div>
  );
}
