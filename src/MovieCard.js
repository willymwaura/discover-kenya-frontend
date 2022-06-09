import React from 'react';

const MovieCard = ({site,openPopup}) => {
  return (
    <div className="movie" key={site.id} onClick={() => openPopup(site.id)}>
      <div>
        <p>{site.nearby_town}</p>
      </div>

      <div>
        <img src={site.image_url} alt={site.title} />
      </div>

      <div>
        <span>{site.region}</span>
        <h3>{site.title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;