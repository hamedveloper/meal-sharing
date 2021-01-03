import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FiveStar } from "./FiveStar";

export function Reviews() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const fetchURL = `/api/meals/${parseInt(id)}`;

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  function submitReview() {
    async function myreviewfetch() {
      await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numberOfStars: rating,
          content: review,
          mealId: parseInt(id),
          createdAt: "2020-10-02",
        }),
      });
    }
    console.log("kj");

    myreviewfetch();

    alert("Thank you for your help. Your review has been succesfully sent!");
  }

  return (
    <section>
      <div className="meal-list">
        {data?.map((item) => (
          <ul key={item.id}>
            <li>Title: {item.title}</li>
            <li>Description: {item.description}</li>
            <li>Created at: {item.createdAt}</li>
            <li>Price: {item.price} DKK</li>
            <li>Max number of guests: {item.number_of_guests} persons</li>
            <br />
          </ul>
        ))}
      </div>
      <div className="star-text-holder">
        <span>Rate your review: </span>
        <div className="star-holder">
          <FiveStar {...{ rating, setRating }} />
        </div>
      </div>
      <br />
      <form>
        <div className="review-form">
          <textarea
            type="text"
            value={review}
            className="review-box"
            placeholder="Type your review here"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={submitReview}>
          Submit you review
        </button>
      </form>
    </section>
  );
}
