import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../assets/loading.gif";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const handleLogin = () => {
    const db = require("../db/dbs.json");
    const users = db.users;

    if (!Array.isArray(users)) {
      setError("Invalid user data");
      return;
    }

    const user = users.find((u) => u.email === email);

    if (user && user.password === password) {
      setSuccessAlert(true);
      setShowSpinner(true);

      setTimeout(() => {
        navigate("/dashboard");
        setSuccessAlert(false);
        setShowSpinner(false);
      }, 3000);
    } else {
      setError("Please try again? Invalid e-mail and password");
      setShowSpinner(false);
    }
  };

  return (
    <>
      {successAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Successfully logged in!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessAlert(false)}
          ></button>
        </div>
      )}
      <div className="text-center">
        {" "}
        {showSpinner ? (
          <div className="text-center">
            <img src={Loading} alt="Please Wait..." id="img" />
          </div>
        ) : null}
      </div>
      <header id="header2" className="container">
        <div className="mx-4">
          <div id="heading">The Best Free Online Resume Builder</div>
          <p>A Quick and Easy Way to Create Your Professional Resume</p>
        </div>
      </header>
      <div className="container text-center" id="pl">
        <div className="field">
          <div className="my-3 fw-bolder" id="logintitle">
            Login
          </div>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            /> <span className="icon is-small is-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"



              height="16"
              width="16"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
          </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
             <span className="icon is-small is-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            </span>
          </p>
        </div>
        {error && <p className="has-text-danger">{error}</p>}

        <p>
          Don't have an account?<Link to="/signup"> Sign Up</Link>
        </p>
        <div className="field">
          <p className="control">
            <button className="button is-success my-2" onClick={handleLogin}>
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
