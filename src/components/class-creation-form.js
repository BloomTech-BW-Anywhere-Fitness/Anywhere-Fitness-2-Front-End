import React from 'react';


export default function class_form(props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
      <div className='form-container'>
        <form id='class-form' onSubmit={onSubmit}>
            <h2>Add New Class</h2>

            <div className='errors'>
                <div>{errors.className}</div>
                <div>{errors.classType}</div>
                <div>{errors.classDate}</div>
                <div>{errors.classTime}</div>
                <div>{errors.classDuration}</div>
                <div>{errors.classIntensity}</div>
                <div>{errors.classLocation}</div>
                <div>{errors.classAttendee}</div>

            </div>
        <div className='label-container'>
            <label>ClassName
                <input id='name-input' 
                    name='className'
                    type='text'
                    value={values.name}
                    placeholder='Enter your name'
                    onChange={onChange}
                />
            </label>

            <label>ClassType
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
            
            <label>ClassDate
                <input id='date-input' 
                    name='classDate'
                    type='date'
                    value={values.date}
                    placeholder='Enter The Date'
                    onChange={onChange}
                />
            </label>
           
            <label>ClassTime
                <input id='time-input' 
                    name='classTime'
                    type='text'
                    value={values.time}
                    placeholder='Enter Class Start Time'
                    onChange={onChange}
                />
            </label>
           
            <label>ClassDuration
                <input id='duration-input' 
                    name='classDuration'
                    type='text'
                    value={values.duration}
                    placeholder='Enter Class Duration'
                    onChange={onChange}
                />
            </label>

            <label>ClassIntensity
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

            <label>ClassLocation
                <input id='location-input' 
                    name='classLocation'
                    type='text'
                    value={values.location}
                    placeholder='Enter Location'
                    onChange={onChange}
                />
            </label>

            <label>ClassAttendee
                <input id='attendee-input' 
                    name='classAttendee'
                    type='text'
                    value={values.attendee}
                    placeholder='Max Amount of People'
                    onChange={onChange}
                />
            </label>
        
            <button id='Submit' disabled={disabled}>Submit Class</button>
            </div>        
        </form>
      </div>
    )
}