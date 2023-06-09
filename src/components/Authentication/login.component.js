import React, { Component, useState } from "react";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const LoginForm = () => {
  const [data, setData] = useState({});
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = data.email; // Retrieve email from the form
    const password = data.password; // Retrieve password from the form

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Login successful
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(data.email);
      setResetEmailSent(true);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleLogin}>
          <h3>Sign In</h3>
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
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {resetEmailSent ? (
            <p>A password reset email has been sent to your email address.</p>
          ) : (
            <p className="forgot-password text-right">
              Forgot{" "}
              <a href="#" onClick={handleForgotPassword}>
                password?
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
