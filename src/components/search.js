// Import dependencies
import React from 'react';

// Build component
function ClassSearch(props) {
	// Deconstruct props
	const { filterClasses } = props;

	// Search Function
	const onSearch = event => {
		const query = event.target;
		filterClasses(query);
	}

	// Return elements
	return (
		<form onSubmit={onSearch}>
			<input
				type="text"
				id="search"
				placeholder="Search classes"
				name="searchValue"
			/>
        	<button>Search</button>
    	</form>
	);
};

// Export component
export default ClassSearch;