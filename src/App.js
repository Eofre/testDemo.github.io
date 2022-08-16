import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import EvenWeek from "./components/Pages/EvenWeek";
import Home from "./components/Pages/Home";
import OddWeek from "./components/Pages/OddWeek";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/evenWeek" element={<EvenWeek />}></Route>
            <Route path="/oddWeek" element={<OddWeek />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
