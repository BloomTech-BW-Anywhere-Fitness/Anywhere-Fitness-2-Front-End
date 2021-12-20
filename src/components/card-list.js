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
			{console.log('hi')}
			{/* {classes.map((class) => {
				console.log('hello');
				// <ClassCard deleteClass={deleteClass} registerClass={registerClass} ></ClassCard>
			})} */}
		</StyledCardList>
	);
};

// Export component
export default CardList;