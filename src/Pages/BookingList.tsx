import React, { useState, useEffect } from "react";
import "../styles/BookingList.css";
import User from "./interfaces";

const Users: React.FC = () => {
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
  
let getDate = new Date().toLocaleString("en-US", { day : '2-digit', month:'2-digit', year:'2-digit'})
  

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
            <tr /*key={}*/>
              <td>Sara</td>
              <td>Adam</td>
              <td>Diamond Cleaning</td>
              <td>{getDate}</td>
              <td>
                 <input type="checkbox" className="check"/>
              </td>
            </tr>
            <tr>
              <td>Sebastian</td>
              <td>Eva</td>
              <td>Top Cleaning</td>
              <td>{getDate}</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Sebastian</td>
              <td>Zach</td>
              <td>Window Cleaning</td>
              <td>{getDate}</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Sebastian</td>
              <td>Eva</td>
              <td>Top Cleaning</td>
              <td>{getDate}</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Sebastian</td>
              <td>Adam</td>
              <td>Basic Cleaning</td>
              <td>{getDate}</td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
        <button>Delete All</button>
      </div>
    </>
  );
};

export default Users;

/* <tr>
    <th>Customer</th>
    <th>Cleaning Level</th>
    <th>Employee</th>
    <th>Date</th>
    <th>Time</th>
  </tr>
  </thead>*/
