import React from 'react'
// eslint-disable-next-lin
 const url="https://discover-kenya.herokuapp.com/map/"
 const url1="https://discover-kenya.herokuapp.com/addexperience/"
 const requestoptions={
	headers:{ "Authorization": " Bearer 93b0f00ab0a8a1097848f31b86a61310f2c8e3ff"}
  }

 

function Popup({ selected, closePopup }) {
	const data=selected.experience
	const dataarray=data.split(".");
	console.log(data)
	console.log(selected.id)
	
	console.log(url)
	const url2=("https://discover-kenya.herokuapp.com/map/" + selected.id)
	console.log("https://discover-kenya.herokuapp.com/map/" + selected.id)
	
	
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
					<form method ="POST" action={((url1+selected.id),requestoptions)}>
					&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" width="40" height="40"placeholder="enter your experience"/><br></br>
					&nbsp;&nbsp;	<button>submit</button>
					</form>
					<p>current weather :&nbsp;<img src={selected.weather_url} alt={selected.title}width="50"height="50"/>&nbsp; {selected.weather_text}</p>
					<p>current temperature : &nbsp;{selected.degree_celcius}</p>
					<p><a href= {url2}target="_blank" rel="noreferrer">see map</a> </p></p>

				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div >
		</section>
	)
}

export default Popup