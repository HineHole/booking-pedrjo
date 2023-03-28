import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BookingList from "./components/BookingList";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter></BrowserRouter>
    </div>
  );
}

export default App;
