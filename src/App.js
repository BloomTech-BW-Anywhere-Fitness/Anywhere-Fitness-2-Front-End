// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import * as yup from 'yup';
// Import styling
import './App.css';
// Import components
import ClassList from './components/class-list';
import Login from './components/Login';
import ClassForm from './components/class-form';
import classSchema from './Validations/classValidation'
import Navbar from './components/navbar';

// Set defaults
const defaultClassList = [];
const defaultValues = {
  className: '',
  classType: '',
  classDate: '',
  classTime: '',
  classDuration: '',
  classIntensity: '',
  classLocation: '',
  classMax: '',
}
const defaultErrors = {
  className: '',
  classType: '',
  classDate: '',
  classTime: '',
  classDuration: '',
  classIntensity: '',
  classLocation: '',
  classMax: '',
}
const defaultDisabled = true;

// Build App
function App() {
  // Set state
  const [ classes, setClasses ] = useState(defaultClassList);
  const [ formValues, setFormValues ] = useState(defaultValues);
  const [ formErrors, setFormErrors ] = useState(defaultErrors); // READY FOR YUP
  const [ disabled, setDisabled ] = useState(defaultDisabled); // READY FOR YUP
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isInstructor, setIsInstructor] = useState(false)

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
  const validate = (name, value) => {
    yup.reach(classSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const changeHandler = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value });
  }

  const postClass = newClass => {
    axios.post('url', newClass)
      .then(res => {
        console.log(res.data);
        setClasses([res.data, ...classes]);
      })
      .catch(err => console.error(err));
  }
  
  const submitHandler = async (event) => {
    const newClass = {
        className: formValues.name,
        classType: formValues.type,
        classDate: formValues.date,
        classTime: formValues.time,
        classDuration: formValues.duration,
        classIntensity: formValues.intensity,
        classLocation: formValues.location,
        classMax: formValues.max,        
    }
    console.log(newClass);
    postClass(newClass);
  }

  const deleteClass = id => {
    // Instructor's 'delete class' function
    axios.delete('url')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }
  
  const registerClass = () => {
    // User's 'register for class' function
  }

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

  useEffect(() => {
    classSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
      .catch(err => console.error(err))
  }, [formValues])
  

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <div className='card'>
          <div className='cardHeader split'>
            <h2>Classes</h2>
            <Link to='/add-classes'>
              <button>Add New Classes</button>
            </Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <ClassList
                classes={classes}
                deleteClass={deleteClass}
                registerClass={registerClass}
              />
            </Route>
            <Route exact path='/login'>
              <Login setIsLoggedIn=  {setIsLoggedIn} setIsInstructor = {setIsInstructor}/>
            </Route>
            <Route exact path='/add-classes'>
              <ClassForm 
                values={formValues}
                submit={submitHandler}
                change={changeHandler}
                disabled={disabled}
                errors={formErrors}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );

}

export default App;