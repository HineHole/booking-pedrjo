import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import About from "./components/About";
import Customer from "./Pages/Customer";
import Cleaner from "./Pages/Cleaner";
import ContactUs from "./components/ContactUs";
import BookingList from "./Pages/BookingList";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<ContactUs></ContactUs>} />
          <Route path="/customer" element={<Customer></Customer>} />
          <Route path="/cleaner" element={<Cleaner></Cleaner>} />
          <Route path="/booking" element={<BookingList></BookingList>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
