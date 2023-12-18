import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      &copy;Copyright 2023 Re-Assume.All rights reserved.
      <footer className="breadcrumb" id="breadcrumb">
        <ul>
          <li>
            <Link to="/about">About Us</Link>/
          </li>
          <li>
            <Link to="/privacyPolicy">Privacy Policy</Link>/
          </li>
          <li>
            <Link to="/termsAndConditions">Terms and Conditions</Link>
          </li>
        </ul>
      </footer>
    </footer>
  );
}
