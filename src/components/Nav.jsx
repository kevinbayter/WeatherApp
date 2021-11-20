import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <img
          src={Logo}
          alt={Logo}
          width={30}
          height={24}
          className="align-top responsive"
        />
        <span className="span"> WeatherApp By Bayter </span>{" "}
        <SearchBar onSearch={onSearch} />{" "}
      </div>{" "}
    </nav>
  );
}

export default Nav;
