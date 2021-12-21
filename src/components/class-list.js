// Import dependencies
import React from 'react';
import styled from 'styled-components';
import ClassCard from './class-card';

// Create styled component
const StyledClassList = styled.div`
	display: flex;
	flex-wrap: wrap;
`

// Build component
function ClassList(props) {
	// Deconstruct props
	const { classes, deleteClass, registerClass } = props;

	// Return elements
	return (
		<StyledClassList>
			{classes.map(item => <ClassCard deleteClass={deleteClass} registerClass={registerClass} />)}
		</StyledClassList>
	);
};

// Export component
export default ClassList;