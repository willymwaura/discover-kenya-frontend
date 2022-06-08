import React from 'react';

const MovieCard = ({site: { id, region, image_url,nearby_town, title } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{nearby_town}</p>
      </div>

      <div>
        <img src={image_url} alt={title} />
      </div>

      <div>
        <span>{region}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;