import React from "react";
import CareerHub from "../../assets/All Images/CareerHub.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import JobSection from "../JobSection/JobSection";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the hook here
  return (
    <div className="m-0">
      <div className="navbar bg-base-100 p-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/" className="default ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/appliedjobs" className="default">
                  Applied Jobs
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-5xl custom-text font-bold">
            JobNextStep
          </Link>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
            <li>
              <Link
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                to="/appliedjobs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Applied Jobs
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
