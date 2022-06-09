import React from 'react'

const Siteinfo= ({ site})=> {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ site.title } <span>({ site.created })</span></h2>
				<p className="rating">Rating: {site.region}</p>
				<div className="plot">
					<img src={site.image_url} />
					<p>{site.experience}</p>
				</div>
				
			</div>
		</section>
	);
}
export default Siteinfo;