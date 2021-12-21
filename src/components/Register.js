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

.container {
  border: 1px solid white;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin-left: 35%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20% 20% 20%;
  width: 70%;
}

button{
  border-radius: 12%;
  width: 100%;
  padding: 5%;
  margin-top: 5%;
  background-color: black;
  color: white;
}

span, label {
  font-weight: 700;
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
        <div className="container">
          <h2>Sign Up</h2>
          <form>
            <div className="col">
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
            </div>
          </form>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;