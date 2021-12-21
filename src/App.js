// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';
// Import styling
import './App.css';
// Import components
import ClassList from './components/class-list';
import Login from './components/Login';
import Class_form from './components/class-creation-form';

// Set defaults
const defaultClassList = [];

function App() {
  // Set state
  const [ classes, setClasses ] = useState(defaultClassList);

  // Functions
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

  const addClass = newClass => {
    axios.post('url', newClass)
      .then(res => {
        setClasses([res.data, ...classes])
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

  return (
    <div className="App">
      {/* Insert Nav Component Here */}
      <div className='container'>
        <div className='card'>
          <div className='classHeader'>
            <h2>Classes</h2>

            <Link to='/add-classes'><button>Add New Classes</button></Link>
                     {/* This isn't displaying at /add-classes, I think because it needs props */}

          </div>
          <ClassList classes={classes} deleteClass={deleteClass} registerClass={registerClass} />
        </div>
      </div>

      <Routes>
        <Route exact path = '/login' element= {<Login/>}/>
        <Route exact path = 'add-classes' element = {<Class_form/>}></Route> 
            {/* This isn't displaying at /add-classes, I think because it needs props */}

      </Routes>
    </div>
  );

}

export default App;