import React, { Component, useState, useEffect } from "react";
import { User, ICompleted } from "./interfaces";
import { useParams } from "react-router-dom";
import "../styles/Customer.css";
import BookingList from "./BookingList";
import text from "../components/username";
import Username from "../components/username";

export default function Customer() {
  let { user } = useParams();
  const a: string | undefined = user;

  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [level, setLevel] = useState("");
  const [employee, setEmployee] = useState("");
  const [myUser, setMyUser] = useState(a);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!customer || !date || !time || !level || !employee){
      alert("Please fill out all the fields")
      return;
    }
    
    try {
      const response = await fetch(
        "https://bookings-api-igtv.onrender.com/bookings/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ customer, level, employee, date }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    Customer();

  };

  return (
    <>
      <body>
        <Username></Username>
        <div className="container">
          <h2>Create a booking:</h2>
          <form onSubmit={handleSubmit} className="Inputfields">
            <label>Your Name:</label>
            <input
              type="text"
              placeholder="John doe"
              onChange={(e) => setCustomer(e.target.value)}
            />
            <label>Choose a cleaner:</label>
            <select onChange={(e) => setEmployee(e.target.value)}>
              <option value=""></option>
              <option value="Adam">Adam</option>
              <option value="Adam">Adam</option>
              <option value="Joe">Joe</option>
            </select>

            <label>Choose a date:</label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <label>Choose a time:</label>
            <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
            ></input>

            <div className="raradioField">
              <label> Basic Cleaning</label>
              <input
                type="radio"
                name="Basic cleaning"
                value="Basic Cleaning"
                onChange={(e) => setLevel(e.target.value)}
              ></input>
              <label>Top cleaning</label>
              <input
                type="radio"
                name="Top Cleaning"
                value="Top Cleaning"
                onChange={(e) => setLevel(e.target.value)}
              ></input>
              <label>Diamond Cleaning</label>
              <input
                type="radio"
                name="Diamond Cleaning"
                value="Diamond Cleaning"
                onChange={(e) => setLevel(e.target.value)}
              ></input>
              <label>Window Cleaning</label>
              <input
                type="radio"
                name="Window Cleaning"
                value="Window Cleaning"
                onChange={(e) => setLevel(e.target.value)}
              ></input>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <BookingList></BookingList>
      </body>
    </>
  );
}
