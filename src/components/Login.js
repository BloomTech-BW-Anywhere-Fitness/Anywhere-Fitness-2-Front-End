import React from "react";

const Login = () =>{
    return(
        <div>
            <h2>Sign In</h2>
            <form>
 
                <div>
                    <label>Email</label>
                    <input
                        type = 'email'
                        placeholder = 'Email'
                        required = {true}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                            type= 'password'
                            placeholder= 'password'
                            required = {true}
                        />
                </div>

                <button type = 'submit'>Log In</button>

                <p>Don't have an account? <button>Sign Up</button> </p> 
            </form>
        </div>
 
    )
}

export default Login;