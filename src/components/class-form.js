import React from 'react';
import styled from 'styled-components';

// Create styled component
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 24px;
    max-width: 50%;
    border-radius: 8px;
    border: 1px solid #f7f7f7;
    padding: 16px;
`


function ClassForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
        console.log(event.target);
    }

    return (
      <div className='form-wrapper'>
        <form id='class-form' onSubmit={onSubmit}>
            <StyledForm>
                <h5>Add New Class</h5>

                <div className='errors'>
                    <div>{errors.className}</div>
                    <div>{errors.classType}</div>
                    <div>{errors.classDate}</div>
                    <div>{errors.classTime}</div>
                    <div>{errors.classDuration}</div>
                    <div>{errors.classIntensity}</div>
                    <div>{errors.classLocation}</div>
                    <div>{errors.classMax}</div>
                </div>

                <label className='label'>Class Name
                        <input id='name-input' 
                            name='className'
                            type='text'
                            value={values.name}
                            placeholder='Enter your name'
                            onChange={onChange}
                        />
                    </label>

                    <label className='label'>Class Type
                        <select id='type-dropdown' 
                        name='classType'
                        value={values.type}
                        onChange={onChange}
                        >
                            <option value=''>--Select Class Type--</option>
                            <option value='Zumba'>Zumba</option>
                            <option value='Pilates'>Pilates</option>
                            <option value='CrossFit'>CrossFit</option>
                            <option value='Boxing'>Boxing</option>
                        </select>
                    </label>
                    
                    <label className='label'>Class Date
                        <input id='date-input' 
                            name='classDate'
                            type='date'
                            value={values.date}
                            placeholder='Enter The Date'
                            onChange={onChange}
                        />
                    </label>
                
                    <label className='label'>Class Time
                        <input id='time-input' 
                            name='classTime'
                            type='time'
                            value={values.time}
                            onChange={onChange}
                        />
                    </label>
                
                    <label className='label'>Class Duration
                        <input id='duration-input' 
                            name='classDuration'
                            type='text'
                            value={values.duration}
                            placeholder='Enter Class Duration'
                            onChange={onChange}
                        />
                    </label>

                    <label className='label'>Class Intensity
                        <select id='intensity-dropdown' 
                        name='classIntensity'
                        value={values.intensity}
                        onChange={onChange}
                        >
                            <option value=''>--Select Intensity--</option>
                            <option value='Beginner'>Beginner</option>
                            <option value='Average'>Average</option>
                            <option value='Extreme'>Extreme</option>
                            <option value='Professional'>Professional</option>
                        </select>
                    </label>

                    <label className='label'>Class Location
                        <input id='location-input' 
                            name='classLocation'
                            type='text'
                            value={values.location}
                            placeholder='Enter Location'
                            onChange={onChange}
                        />
                    </label>

                    <label className='label'>Class Max
                        <input id='attendee-input' 
                            name='classMax'
                            type='text'
                            value={values.max}
                            placeholder='Max Amount of People'
                            onChange={onChange}
                        />
                    </label>
                
                    <button id='Submit' disabled={disabled}>Submit Class</button> 
            </StyledForm>
        </form>
      </div>
    )
}

export default ClassForm;