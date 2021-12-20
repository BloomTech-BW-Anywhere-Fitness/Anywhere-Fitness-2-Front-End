import React, {useState} from "react";

const Login = () =>{
const [state, setState] = useState({
    username: '',
    password: '',
})

const onSubmit = e =>{
    e.preventDefault();
}

const handleChange = e =>{
    // setState({
    //     ...state,
    //     e.target.name: e.target.value
    // })
    // console.log(state)
}

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
                        />
                </div>

                <button type = 'submit'>Log In</button>

                <p>Don't have an account? <button>Sign Up</button> </p> 
            </form>
        </div>
 
    )
}

export default Login;