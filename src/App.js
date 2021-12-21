// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Import styling
import './App.css';
<<<<<<< HEAD
import Login from './components/Login';
=======
// Import components
import ClassList from './components/class-list';

// Set defaults
const defaultClassList = [];
>>>>>>> 8592e6f7740de8188f0bad14ac01941582f2c828

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
<<<<<<< HEAD
        <h1>Anywhere Fitness</h1>
        <Login/>
=======
      {/* Insert Nav Component Here */}
      <div className='container'>
        <div className='card'>
          <div className='classHeader'>
            <h2>Classes</h2>
            <button>Add New Classes</button>
          </div>
          <ClassList classes={classes} deleteClass={deleteClass} registerClass={registerClass} />
        </div>
      </div>
>>>>>>> 8592e6f7740de8188f0bad14ac01941582f2c828
    </div>
  );
}

export default App;
