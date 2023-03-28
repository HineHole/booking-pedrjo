import React from "react";
import "../styles/MyPages.css";

export async function getData() {
  const url = "https://bookings-api-igtv.onrender.com";
  const url_get = `${url}/bookings`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function MyPages() {
  return <div>MyPages</div>;
}

export default MyPages;
