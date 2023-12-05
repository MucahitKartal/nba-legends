import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../Helper/data";

const CardContainer = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const filteredData = (player) => {
    const inputValue = value
      .trim()
      .replace(/[^a-z]/gi, "")
      .toLowerCase();
    if (player.name.toLowerCase().includes(inputValue)) {
      return player;
    }
  };

  return (
    <div className="container">
      <div>
        <input type="search" onChange={handleChange} />
      </div>
      <div>
        {data.filter(filteredData).map(({ name, img, statistics }) => (
          <PlayerCard
            key={name}
            name={name}
            img={img}
            statistics={statistics}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
