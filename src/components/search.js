import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="search">
			<input 
				type="text" 
				placeholder="enter a region to visit..." 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search