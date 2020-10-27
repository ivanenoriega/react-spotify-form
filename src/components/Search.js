import React from 'react';

function Search(props) {
	return (
		<li className={props.className}>
			<input
				className="filters__input"
				placeholder={props.className}
				type="text"
				value={props.value}
			/>
		</li>
	);
}

export default Search;
