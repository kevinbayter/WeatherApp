import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={handleChange}
      />
      <input type="submit" value="Add" className="submit" />
    </form>
  );
}
