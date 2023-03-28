import React from "react";
import "../styles/MyPages.css";

/*export async function getData() {
  const url = "https://bookings-api-igtv.onrender.com";
  const url_get = `${url}/bookings`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}*/

export  const {customer, level, employee, status, id, time, date} = Object.assign({}, {customer: "", level: "", employee: "", status: "", id: "", time: "", date: false});


fetch("https://bookings-api-igtv.onrender.com/bookings", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.status === 200) {
      response.json().then((j) => console.log(j));
    } else {
      console.log("ERROR", response.status);
    }
  })
  .catch((error) => console.log(error));




function MyPages() {


  return <div>Booking List Data</div>;
}

export default MyPages;
