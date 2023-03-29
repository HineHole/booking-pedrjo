import React, { useState, useEffect } from "react";
import '../styles/BookingList.css'

interface User {
  customer: string;
  level: string;
  employee: string;
  status: boolean;
  id: number;
  time: number;
  date: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://bookings-api-igtv.onrender.com/bookings"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const deletelist = async (id: number) => {
    await fetch(`https://bookings-api-igtv.onrender.com/booking/${id}`, {
      method: 'DELETE'
    });
    setUsers(users.filter(user => user.id !== id));
  };



  return (
    <div>
      <h1>Booking List</h1>
      <table id="customers">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Employee</th>
            <th>Type of Cleaning</th>
            <th>Date</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.customer}</td>
              <td>{user.employee}</td>
              <td>{user.level}</td>
              <td>{user.date}</td>
             <td> <button onClick={() => deletelist(user.id)}>Delete</button></td>
            </tr>
            
            
          </tbody>
          
        ))}
        <button>Delete All</button>
      </table>
    </div>
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
