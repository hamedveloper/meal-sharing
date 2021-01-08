import React, { useState } from "react";

export function AddMeal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState("");

  function onSubmit() {
    async function myfetch() {
      await fetch("/api/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: desc,
          createdAt: date,
          price: price,
          number_of_guests: numberOfGuest,
        }),
      });
    }
    myfetch();
    alert("The meal has been added to the list");
  }

  return (
    <section className="add-meal">
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <label>Description: </label>
      <textarea
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <br />
      <label>Date: </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <br />
      <label style={{ color: "#6b5835" }}>Price: </label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <br />
      <label style={{ color: "#6b5835" }}>Number of guests: </label>
      <input
        type="text"
        value={numberOfGuest}
        onChange={(e) => setNumberOfGuest(e.target.value)}
      ></input>

      <button onClick={onSubmit}>submit</button>
    </section>
  );
}
