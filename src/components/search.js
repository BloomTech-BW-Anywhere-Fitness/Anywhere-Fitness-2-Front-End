// Import dependencies
import React from 'react';
import styled from 'styled-components';

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

/// REMOVE ///
// Add as a helper function to App.js
const filterClasses = (query) => {
	if (!query) {
		return <ClassList />;
	} else {
		const filteredList = classes.filter(item => {
			const className = item.name.toLowerCase();
			return className.includes(query);
		});

		return (
			{filteredList.map(item => <ClassCard key={item.id} deleteClass={deleteClass} registerClass={registerClass} />)}
		)
	}
};