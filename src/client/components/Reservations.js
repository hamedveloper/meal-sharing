import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export function Reservations() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [guestNr, setGuestNr] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const [email, setEmail] = useState("");

  const fetchURL = `http://localhost:5000/api/meals/${parseInt(id)}`;

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  function availability() {
    const selectedMeal = data?.map((item) => {
      const myResult = {
        number_of_guests: item.number_of_guests,
      };
      return myResult;
    });
    const availabilityToBook = selectedMeal[0].number_of_guests - guestNr;

    return availabilityToBook;
  }

  function SubmitReservation() {
    async function myfetch() {
      await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          guestamount: guestNr,
          phonenumber: phoneNr,
          email: email,
          mealId: parseInt(id),
        }),
      });
    }
    myfetch();

    alert("Thank you. Your reservation succesfully done!");

    async function fetchUpdate() {
      await fetch(
        `http://localhost:5000/api/meals/${parseInt(
          id
        )}?numberOfGuests=${availability()}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
    }
    fetchUpdate();

    // function checkAvailability() {
    // const selectedMeal = data?.map((item) => {
    //   const myResult = {
    //     number_of_guests: item.number_of_guests,
    //   };
    //   return myResult;
    // });
    // const checkAvailability = selectedMeal[0].number_of_guests;
    // // return checkAvailability;
    // console.log(checkAvailability);

    if (availability() === 0) {
      async function newfetch() {
        await fetch(`http://localhost:5000/api/meals/${parseInt(id)}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });
      }
      newfetch();
    }
    // }
  }

  //   let avail = 1000;
  //   data ? (avail = checkAvailability()) : "";

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
      {/* {avail <= 0 ? (
        <div>Unfortunately there is no any places to reserve</div>
      ) : (
        <div> */}
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <label>How many guest: </label>
      <input
        type="text"
        value={guestNr}
        onChange={(e) => setGuestNr(e.target.value)}
      ></input>
      <br />
      <label>Phone Number: </label>
      <input
        type="text"
        value={phoneNr}
        onChange={(e) => setPhoneNr(e.target.value)}
      ></input>
      <br />
      <label>E-mail: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <button type="submit" onClick={SubmitReservation}>
        Reserve
      </button>
      {/* </div> */}
      {/* )} */}
    </section>
  );
}
