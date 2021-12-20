import React, { useState } from "react";

const Register = () => {

  const [on, setOn] = useState(false);

  const toggleOn = (e) => {
    e.preventDefault();
    setOn(!on);
  };


  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            id="name"
          />
        </div>

        <div className="email">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>

        <div>
          <p>Register as an instructor</p>
          <button className="toggle" onClick={toggleOn}>{on ? 'no' : 'yes'}</button>
          {on &&
            <div>
              <label>Instructor Authentication Code</label>
              <input
                type="text"
                placeholder="Authentication Code"
                id="auth"
              />
            </div>
          }
        </div>

        <button id="submit">Create Account</button>

        <div className="login">
          <p>Already have an account? <span>Log In</span></p>
        </div>
      </form>
    </div>
  );
};

export default Register;