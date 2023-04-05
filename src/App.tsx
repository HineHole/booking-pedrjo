import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import About from "./components/About";
import Customer from "./Pages/Customer";
import BookingList from "./Pages/BookingList";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/customer" element={<Customer></Customer>} />
          <Route path="/booking" element={<BookingList></BookingList>} />
        </Routes>
      </BrowserRouter>
      <Footer companyName="Städa Fint AB" />
    </div>
  );
}

export default App;
