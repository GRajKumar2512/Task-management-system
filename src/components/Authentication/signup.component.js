import React, { Component, useState } from "react";
import firebase from "../../firebase";
import "./auth.css";

const RegisterForm = () => {
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const email = data.email; // Retrieve email from the form
    const password = data.password; // Retrieve password from the form

    console.log(data);

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Registration successful
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleRegistration}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={updateData}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={updateData}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
