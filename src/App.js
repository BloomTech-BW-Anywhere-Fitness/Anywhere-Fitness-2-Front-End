// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
// Import styling
import './App.css';
// Import components
import ClassList from './components/class-list';
import Login from './components/Login';
import ClassForm from './components/class-form';

// Set defaults
const defaultClassList = [];
const defaultValues = {
  name: '',
  type: '',
  date: '',
  time: '',
  duration: '',
  intensity: '',
  location: '',
  attendee: '',
}
const defaultErrors = {
  name: '',
  type: '',
  date: '',
  time: '',
  duration: '',
  intensity: '',
  location: '',
  attendee: '',
}
const defaultDisabled = true;

// Build App
function App() {
  // Set state
  const [ classes, setClasses ] = useState(defaultClassList);
  const [ formValues, setFormValues ] = useState(defaultValues);
  const [ formErrors, setFormErrors ] = useState(defaultErrors); // READY FOR YUP
  const [ disabled, setDisabled ] = useState(defaultDisabled); // READY FOR YUP

  // Fetch data
  useEffect(() => {
    const getClasses = () => {
    axios.get('url')
      .then(res => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch(err => console.error(err));
    }
  }, [])

  // Functions
  const changeHandler = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

   // READY FOR YUP
  // const validate = (name, value) => {
  //   yup.reach(FormSchema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  // }

  const addClass = newClass => {
    axios.post('url', newClass)
      .then(res => {
        console.log(res.data);
        setClasses([res.data, ...classes]);
      })
  }

  const deleteClass = id => {
    // Instructor's 'delete class' function
    axios.delete('url')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }
  
  const registerClass = () => {
    // User's 'register for class' function
  }

  // READY FOR YUP
  // useEffect(() => {
    //   FormSchema.isValid(formValues)
    //   .then(valid => setDisabled(!valid));
  // }, [formValues])

  return (
    <div className='App'>
      {/* Insert Nav Component Here */}
      <div className='container'>
        <div className='card'>
          <div className='classHeader'>
            <h2>Classes</h2>
            <Link to='/add-classes'><button>Add New Classes</button></Link>
                     {/* This displays the component, but the component returns errors */}
          </div>
          <ClassList classes={classes} deleteClass={deleteClass} registerClass={registerClass} />
        </div>
      </div>
      <Routes>
        <Route exact path = '/login' element= {<Login />} />
        <Route exact path = '/add-classes' element = {
          <ClassForm
            values={formValues}
            addClass={addClass}
            change={changeHandler}
            disabled={disabled}
            errors={formErrors}
          />
        } />
            {/* This displays the component, but the component returns errors */}
      </Routes>
    </div>
  );

}

export default App;