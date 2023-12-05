import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(false);
  // const handleDisplay = () => {
  //   setDisplayStats(!displayStats);

  // };
  return (
    <div>
      <div className="card" onClick={() => setDisplayStats(!displayStats)}>
        {displayStats ? (
          <ul>
            {statistics.map((stats, index) => (
              <li key={index}>{stats}</li>
            ))}
          </ul>
        ) : (
          <div>
            <img src={img} alt={name} width="400px" />
          </div>
        )}
      </div>
      <div>
        <a target="_blank" href={`https://en.wikipedia.org/wiki/${name}`}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default PlayerCard;
