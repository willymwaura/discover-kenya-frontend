import React from 'react'

import Result from './result'

function Results ({ results, openPopup }) {
	return (
		<section className="container">
			{results.map(result => (
				<Result key={result.id} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results