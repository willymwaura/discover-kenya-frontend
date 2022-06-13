import React from 'react'
 const url="https://discover-kenya.herokuapp.com/map/"
 

function Popup({ selected, closePopup }) {
	const data=selected.experience
	const dataarray=data.split(".");
	console.log(data)
	console.log(selected.id)
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title }</h2>
				<p className="rating">Region: {selected.region}</p>

				<div className="plot">
					<img src={selected.image_url}alt={selected.title} width="250"height="450"/>
					<p>
					<p>nearby_town: {selected.nearby_town}</p>
					<p>people experiences:</p>
					<p>{dataarray.join('\n')}</p>
					<p>current weather :&nbsp;<img src={selected.weather_url} alt={selected.title}width="50"height="50"/>&nbsp; {selected.weather_text}</p>
					<p>current temperature : &nbsp;{selected.degree_celcius}</p>
					<p><a href={url+selected.id} target="_blank" >see map</a> </p></p>

				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup