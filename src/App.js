import React from "react";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import Apps from "./Pages/Apps";
import Movies from "./Pages/Movies";
import Books from "./Pages/Books";
import Kids from "./Pages/Kids";
import { Route, Routes } from "react-router-dom";
import "./components/navbar.css"; // Correct CSS import

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  );
}

export default App;
