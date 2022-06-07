import React from 'react';

const MovieCard = ({site: { id, region, image_url, title } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{region}</p>
      </div>

      <div>
        <img src={image_url !== "//cdn.weatherapi.com/weather/64x64/day/116.png" ? image_url : "https://via.placeholder.com/400"} alt={title} />
      </div>

      <div>
        <span>{region}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;