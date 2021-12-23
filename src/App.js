import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards";

export default function App() {
  const [cities, setCities] = useState([]);

  const apiKey = "89104e7f7f2f31a64a0d479269b86843";
  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((resources) => {
        if (resources.main !== undefined) {
          const city = {
            min: Math.round(resources.main.temp_min),
            max: Math.round(resources.main.temp_max),
            img: resources.weather[0].icon,
            id: resources.id,
            wind: resources.wind.speed,
            temp: resources.main.temp,
            name: resources.name,
            weather: resources.weather[0].main,
            clouds: resources.clouds.all,
            latitud: resources.coord.lat,
            longitud: resources.coord.lon,
          };
          setCities([...cities, city]);
        } else {
          alert("City not found");
        }
      });
  }

  function onClose(id) {
    setCities([...cities.filter((c) => c.id !== id)]);
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
