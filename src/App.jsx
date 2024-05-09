import "./App.css";
import React, { Component, useState } from "react";
import Header from "./Components/Site/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Site/Footer";

const App = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [style, setStyle] = useState("dark");

  function handleCheck(event) {
    const check = event.target.checked;
    style === "dark" ? setStyle("light") : setStyle("dark");
    setIsChecked(check);
  }

  return (
    <main className="app">
      <div className={`header-home-container header-home-container-${style}`}>
        <Header style={style} />
        <br />
        <Home style={style} />
        <Footer handleCheck={handleCheck} isChecked={isChecked} style={style} />
      </div>
    </main>
  );
};

export default App;
