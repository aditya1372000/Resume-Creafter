import React from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <header id="header2" className="container text-center">
        <div className="mx-4">
          <div id="heading">Dashboard</div>
        </div>
      </header>
      <div className="container text-center" id="pl">
        <div className="my-3 fw-bolder"></div>
        <button
          className="button is-success my-2"
          onClick={() => navigate("/body")}
        >
          Create Resume
        </button>
      </div>
    </>
  );
};

export default Dashboard;