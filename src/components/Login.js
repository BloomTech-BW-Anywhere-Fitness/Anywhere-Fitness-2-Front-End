import React, {useState} from "react";
import axios from "axios";

const Login = (props) =>{
  const {setIsLoggedIn, setIsInstructor} = props;
  // console.log(isLoggedIn)
 
    // State Management
  const [credentials, setCredentials] = useState({
    "email": "",
    "password": ""
  });


  // Event Handlers
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    console.log(credentials)
  };

//login function, used on the next line in onSubmit
  const login = credentials =>{
    axios.post('https://reqres.in/api/login', credentials)
      .then(res =>{
        console.log(res.data)
        setIsLoggedIn(true)
        window.localStorage.setItem('token', res.data.token);
      })
      .catch(err=>{
        console.log(err)
      })
  }

  //On Submit
  const onSubmit = (event) => {
    event.preventDefault();
    login(credentials);
  };



    return(
        <div>
            <h2>Sign In</h2>
            <form onSubmit = {onSubmit}>
 
                <div>
                    <label>Email</label>
                    <input
                        name = 'email'
                        type = 'email'
                        placeholder = 'Email'
                        required = {true}
                        onChange = {handleChange}
                        value= {credentials.email}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                            name = 'password'
                            type= 'password'
                            placeholder= 'password'
                            required = {true}
                            onChange = {handleChange}
                            value= {credentials.password}
                        />
                </div>

                {/* Probably put in an error section */}

                <button type = 'submit'>Log In</button>

                <p>Don't have an account? <button>Sign Up</button> </p> 
            </form>
        </div>
 
    )
}

export default Login;