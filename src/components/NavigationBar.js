import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
      <nav className=" navbar is-white navbar-expand-lg " id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
            </svg>
            <span className="fw-bolder" id="title1">
              Re-
            </span>
            <span className="fw-bold">Assume</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="navbar-item nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-item nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-item"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex mr-4" role="search">
              <Link to="/login" className=" button is-primary fw-bolder ">
                Sign Up/Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
