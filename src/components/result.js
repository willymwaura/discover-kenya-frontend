import React from 'react'

function Result({ result, openPopup }) {
	return (
	
	<div className="movie" onClick={() => openPopup(result.id)}>
      <div>
        <p>{result.nearby_town}</p>
      </div>

      <div>
        <img src={result.image_url} alt={result.title} />
      </div>

      <div>
        <span>{result.region}</span>
        <h3>{result.title}</h3>
      </div>
    </div>
		
	)
}

export default Result