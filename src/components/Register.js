import React, { useState } from "react";
import styled from "styled-components";

const StyledRegister = styled.div`
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}
.toggle-switch input[type="checkbox"] {
  display: none;
}
.toggle-switch .switch {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
}
.toggle-switch .switch::before {
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 21px;
  height: 21px;
  background-color: #aaa;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.toggle-switch input[type="checkbox"]:checked + .switch::before {
  transform: translateX(25px);
  background-color: #6699cc;
}
.toggle-switch input[type="checkbox"]:checked + .switch {
  background-color: #336699;
}
`;

const Register = () => {

  const [on, setOn] = useState(false);

  const toggleOn = () => {
    setOn(!on);
  };


  return (
    <StyledRegister>
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
            <label className="toggle-switch">
              <input type="checkbox" onClick={toggleOn} />
              <span className="switch" />
            </label>
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
    </StyledRegister>
  );
};

export default Register;