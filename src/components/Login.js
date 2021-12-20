import React, {useState} from "react";

const Login = () =>{
const [state, setState] = useState({
    email: '',
    password: '',
})
//pretty sure I'm not doing this right

let authField = true;
    //just testing some stuff with this, ignore

const onSubmit = e =>{
    e.preventDefault();
}
//will fill this in more when I get backend info

const handleChange = e =>{
    // setState({
    //     ...state,
    //     e.target.name: e.target.value,
    // })
    // console.log(state)
}
//will fill this in more when I get info from backend and sort out my state issues

const setAuthField = e =>{
    if (authField){
        authField = false;
    }
    else{
        authField = true
    }
    console.log(authField)
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

                {/* Probably put in an error section */}

                <button type = 'submit'>Log In</button>

                <p>Don't have an account?  <button>Sign Up</button> </p> 

           <button onClick = {setAuthField}>Register as an instructor</button>
                
                
                {authField? <div>Blah Blah Blah</div> : null}
                {/* just testing some stuff with this, ignore */}
            </form>
        </div>
 
    )
}

export default Login;