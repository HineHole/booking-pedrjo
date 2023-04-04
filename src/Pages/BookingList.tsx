import React, { useState, useEffect } from "react";
import "../styles/BookingList.css";
import { User, ICompleted } from "./interfaces";
import "./interfaces";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  // fetch the api data using GET metod
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://bookings-api-igtv.onrender.com/bookings",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  });
  // Delete a specific booking
  const deletelist = async (id: string) => {
    const URL = id;
    console.log(URL);
    try {
      await fetch(`https://bookings-api-igtv.onrender.com/bookings/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //completed Bookings
  const [bookings, setBookings] = useState<ICompleted[]>([
    {
      id: 1,
      customer: "Leo",
      employee: "Erik",
      date: "16/04/2023",
      time: "10:35",
      level: "Diamond Cleaning",
    },
    {
      id: 2,
      customer: "Maria",
      employee: "Eva",
      date: "17/04/2023",
      time: "12:55",
      level: "Window Cleaning",
    },
    {
      id: 3,
      customer: "Josef",
      employee: "Mike",
      date: "22/04/2023",
      time: "20:35",
      level: "Basic Cleaning",
    },
    {
      id: 4,
      customer: "Adam",
      employee: "Mira",
      date: "22/04/2023",
      time: "08:35",
      level: "Diamond Cleaning",
    },
    {
      id: 5,
      customer: "Lee",
      employee: "John",
      date: "16/04/2023",
      time: "18:35",
      level: "Basic Cleaning",
    },
  ]);

  const [selectedBox, setSelectedBox] = useState<number[]>([]);
  function handleSelectBox(id: number) {
    if (selectedBox.includes(id)) {
      setSelectedBox(selectedBox.filter((item) => item !== id));
    } else {
      setSelectedBox([...selectedBox, id]);
    }
  }

  function handleDelete() {
    console.log(selectedBox);
    if (selectedBox.length === 0) {
      setBookings([]);
    } else {
      setBookings(bookings.filter((item) => !selectedBox.includes(item.id)));
      setSelectedBox([]);
    }
  }

  return (
    <>
      <div className="container">
        <h2>Booking List</h2>
        <table id="customers">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Employee</th>
              <th>Type of Cleaning</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody>
              <tr key={user._id}>
                <td>{user.customer}</td>
                <td>{user.employee}</td>
                <td>{user.level}</td>
                <td>{user.date}</td>
                <td>
                  <button onClick={() => deletelist(user._id)}>
                    Delete&#10006;
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="checked">
        <h2>Completed Bookings</h2>
        <table id="customers">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Employee</th>
              <th>Type of Cleaning</th>
              <th>Date & Time</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.customer}</td>
                <td>{booking.employee}</td>
                <td> {booking.level}</td>
                <td>
                  {booking.time}
                  <hr></hr>
                  {booking.date}
                </td>

                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleSelectBox(booking.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDelete}>Delete All</button>
      </div>
    </>
  );
}

export default Users;

/* <tr>
    <th>Customer</th>
    <th>Cleaning Level</th>
    <th>Employee</th>
    <th>Date</th>
    <th>Time</th>
  </tr>
  </thead>*/
