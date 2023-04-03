import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import About from "./components/About";
import Customer from "./Pages/Customer";
import ContactUs from "./components/ContactUs";
import BookingList from "./Pages/BookingList";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<ContactUs></ContactUs>} />
          <Route path="/customer" element={<Customer></Customer>} />
          <Route path="/booking" element={<BookingList></BookingList>} />
        </Routes>
      </BrowserRouter>
      <HomePage />
      <Footer companyName="Städa Fint AB" />
    </div>
  );
}

export default App;
