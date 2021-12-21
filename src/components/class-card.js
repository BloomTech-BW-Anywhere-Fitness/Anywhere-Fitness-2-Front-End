// Import dependencies
import React from 'react';
import styled from 'styled-components';

// Create styled component
const StyledClassCard = styled.div`
	background-color: white;
	padding: 16px;
	border-radius: 8px;
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
	// Deconstruct props
	const { user, deleteClass, registerClass, registered, type, start, duration, intensity, location, currentCt, maxCt } = props;

	// Card functions
	const onDelete = event => {
		// Delete function
		// Should trigger a DELETE axios request
		deleteClass();
	}
	const onRegister = event => {
		// Register function
		// Should toggle the 'registered' boolean
		registerClass();
	}

	// Return elements
	return (
		<StyledClassCard>
			{user === 'instructor'
			? <div className='cardHeader'>
				<h3>Card Name</h3>
				<button onClick={onDelete}></button>
			</div>
			: <div className='cardHeader'>
				<h3>Card Name</h3>
				{registered === true
				? <button className='registered' onClick={onRegister}>Unregister</button>
				: <button className='notRegistered' onClick={onRegister}>Register</button>
				}
			</div>
			}
			<div className='divider'></div>
			<StyledCardDetail>
				<h6>Type</h6>
				<p>{type}</p>
			</StyledCardDetail>
			<StyledCardDetail>
				<h6>Start</h6>
				<p>{start}</p>
			</StyledCardDetail>
			<StyledCardDetail>
				<h6>Duration</h6>
				<p>{duration}</p>
			</StyledCardDetail>
			<StyledCardDetail>
				<h6>Intensity Level</h6>
				<p>{intensity}</p>
			</StyledCardDetail>
			<StyledCardDetail>
				<h6>Location</h6>
				<p>{location}</p>
			</StyledCardDetail>
			<StyledCardDetail>
				<h6>Attendees</h6>
				<p>{currentCt}/{maxCt}</p>
			</StyledCardDetail>
		</StyledClassCard>
	);
};

// Export component
export default ClassCard;