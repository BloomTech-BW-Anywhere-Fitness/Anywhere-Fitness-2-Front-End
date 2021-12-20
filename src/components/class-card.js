// Import dependencies
import React from 'react';
import styled from 'styled-components';

// Create styled component
const StyledClassCard = styled.div`
	background-color: white;
	padding: 16px;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
`

const StyledCardDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

// Build component
function ClassCard(props) {
	// Return elements
	return (
		<StyledClassCard>
			<div className='cardHeader'>
				<h3>Card Name</h3>
				<button></button>
			</div>
			<div className='divider'></div>
			<StyledCardDetail>
				<h6>Label</h6>
				<p>Value</p>
			</StyledCardDetail>
		</StyledClassCard>
	);
};

// Export component
export default ClassCard;