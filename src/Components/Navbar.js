import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/restaurant.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
//import { icon } from "https://fontawesome.com/icons/fork-knife?f=classic&s=solid&pc=%23ffd750";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="title">
          <Link className="brandName" to="/">
            <img
              src={Logo}
              alt="brand logo"
              style={{
                width: "60px",
                height: "50px",
                position: "relative",
                left: "4px",
                top: "6px",
              }}
              className="brandLogo"
            />
            Quick Bites
          </Link>
        </div>
        <div className="list">
          <Link to="/" className="listItem">
            Home
          </Link>
          {localStorage.getItem("authToken") ? (
            <Link to="/" className="listItem">
              My Orders
            </Link>
          ) : (
            ""
          )}
          {!localStorage.getItem("authToken") ? (
            <>
              <Link to="/login" className="listItem">
                Login
              </Link>
              <Link to="/createuser" className="listItem signup_nav">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link className="listItem">My cart</Link>
              <button
                className="btn btn-danger btn-sm listItem"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
