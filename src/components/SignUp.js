import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Loading from '../assets/loading.gif';



const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [passwordError, setPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      setShowSpinner(false);
      return;
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
        });

        setPasswordError("");

        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          navigate('/dashboard');
          setShowSpinner(false);

        }, 3000);

      })
      .catch((error) => {
        console.error("Error:", error);
        setShowSpinner(false);

      })
  };
  return (
    <>

      {showAlert && (
          <div className="alert alert-success alert-dismissible fade show container" role="alert">
            <strong>Succesfully!!</strong> create an account.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        )}
       <div className="text-center" > {showSpinner ? (
        <div className="text-center">
          <img src={Loading} alt="Please Wait..." id="img"/>
        </div>
      ) : null}</div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="container text-center"
        id="pl"
      >
         
        <div className="my-3 fw-bolder">Create a New Account</div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="icon is-small is-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              id="email"
              name="email"
              className="input"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="icon is-small is-left">
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
        <p className="help is-danger">{passwordError}</p>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
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
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              minLength="8"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
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
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />{" "}
              I agree to the{" "}
              <Link to="/termsAndConditions">terms and conditions</Link>
            </label>
          </div>
        </div>

        <button className="button is-success my-2" type="submit">
          Sign Up
        </button>
        <div>
          If you already have an account ?<Link to="/login">Login</Link>
        </div>
      
      </form>


    </>
  );
};

export default SignUp;
