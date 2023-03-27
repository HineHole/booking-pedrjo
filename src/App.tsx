import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MyPages from "./components/MyPages";
import "./App.css";
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
