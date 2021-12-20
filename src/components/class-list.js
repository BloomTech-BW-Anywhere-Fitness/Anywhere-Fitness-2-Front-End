// Import dependencies
import React from 'react';
import styled from 'styled-components';
import ClassCard from './class-card';

// Create styled component
const StyledCardList = styled.div`
	display: flex;
	flex-wrap: wrap;
`

// Build component
function CardList(props) {
	// Deconstruct props
	const { classes, deleteClass, registerClass } = props;

	// Return elements
	return (
		<StyledCardList>
			{ classes.map(item => <ClassCard deleteClass={deleteClass} registerClass={registerClass} />)}
		</StyledCardList>
	);
};

// Export component
export default CardList;