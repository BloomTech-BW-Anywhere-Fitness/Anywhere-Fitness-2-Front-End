import React from "react";

const Register = () => {
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

        <button id="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;