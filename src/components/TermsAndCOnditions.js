import React from "react";
import { Link } from 'react-router-dom';



export default function TermsAndCOnditions() {
  function MyComponent() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <header id="header2" className="container">
        <div id="heading" className="text-center">
          Terms and Conditions
        </div>
      </header>
      <div className=" container my-4">
        <p id="pa">
          Welcome to{" "}
          <strong>
            <span className="fw-bolder" id="title1">
              Re-
            </span>
            <span className="fw-bold  ">Assume</span>
          </strong>
          , a resume builder website. By using our services, you agree to comply
          with and be bound by the following detailed terms and conditions of
          use. If you disagree with any part of these terms, please do not use
          our website.
        </p>
        <div id="container" className="my-6">
          <div id="user-account">
            <strong>1. User Account</strong>
            <p id="user-account-1.1">
              {" "}
              &#8618; To access certain features of the service, you may be
              required to register for an account.
            </p>
            <p id="user-account-1.2">
              {" "}
              &#8618; You are responsible for maintaining the confidentiality of
              your account and password and for restricting access to your
              computer. You agree to accept responsibility for all activities
              that occur under your account or password.
            </p>
            <p id="user-account-1.3">
              {" "}
              &#8618;You must provide accurate and complete information during
              the registration process.
            </p>
          </div>

          <div id="resume-creation">
            <strong>2. Resume Creation</strong>
            <p id="resume-creation-2.1">
              {" "}
              &#8618; The resume creation tools provided by Re-Assume are
              intended for personal use to create multiple resumes.
            </p>
            <p id="resume-creation-2.2">
              {" "}
              &#8618; You agree not to use the service for any illegal or
              unauthorized purpose.
            </p>
            <p id="resume-creation-2.3">
              {" "}
              &#8618; The content and information provided by you for creating
              resumes should be accurate and not violate any third-party rights.
            </p>
          </div>

          <div id="privacy">
            <strong>3. Privacy</strong>
            <p id="privacy-3.1">
              {" "}
              &#8618; Your use of Re-Assume is also governed by our{" "}
              <Link to="/privacyPolicy">Privacy Policy</Link>. Please review our
              Privacy Policy for more information on how we collect, use, and
              disclose information.
            </p>
            <p id="privacy-3.2">
              {" "}
              &#8618;We take the privacy and security of your personal
              information seriously. For details, refer to our{" "}
              <Link to="/privacyPolicy">Privacy Policy</Link>.
            </p>
          </div>

          <div id="termination">
            <strong>4. Termination</strong>
            <p id="termination-4.1">
              {" "}
              &#8618; Re-Assume reserves the right to terminate or suspend your
              account and access to the service at any time, with or without
              cause, and with or without notice.
            </p>
            <p id="termination-4.2">
              {" "}
              &#8618; You may terminate your account at any time by contacting
              us at{" "}
              <Link to="mailto:support@reassume.com">support@reassume.com</Link>.
            </p>
          </div>

          <div id="intellectual-property">
            <strong>5. Intellectual Property</strong>
            <p id="intellectual-property-5.1">
              {" "}
              &#8618; All content, features, and functionality on Re-Assume,
              including but not limited to text, graphics, logos, and images,
              are the intellectual property of Re-Assume and are protected by
              copyright and other intellectual property laws.
            </p>
          </div>

          <div id="changes-to-terms">
            <strong>6. Changes to Terms</strong>
            <p id="changes-to-terms-6.1">
              {" "}
              &#8618; Re-Assume reserves the right to modify or replace these
              terms at any time. It is your responsibility to check these terms
              periodically for changes.
            </p>
            <p id="changes-to-terms-6.2">
              {" "}
              &#8618; We will notify you of any material changes to these terms
              through a notice on our website.
            </p>
          </div>

          <div id="contact">
            <p>
              If you have any questions or concerns about these terms and
              conditions, please contact us at{" "}
              <Link to="mailto:support@reassume.com">support@reassume.com</Link>.
            </p>
          </div>
          <strong id="date">Last Updated:[{MyComponent()}]</strong>
        </div>
      </div>
    </div>
  );
}
