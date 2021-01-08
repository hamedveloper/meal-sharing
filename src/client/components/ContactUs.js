import React, { useState } from "react";

export function ContactUs() {
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  function submitHandler() {
    async function myfetch() {
      await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailContact: contactEmail,
          name: contactName,
          contentContact: contactMessage,
        }),
      });
    }
    myfetch();
    alert("Your contact information has been added to the list");
  }

  return (
    <section className="add-meal">
      <form>
        <label>*Your Email:</label>
        <input
          type="text"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        ></input>
      </form>
      <form>
        <label>*Full Name:</label>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        ></input>
        <form>
          <label style={{ color: "#6b5835" }}>Message:</label>
          <textarea
            type="text"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>
        </form>
        <button
          type="submit"
          style={{ marginTop: "50px" }}
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
