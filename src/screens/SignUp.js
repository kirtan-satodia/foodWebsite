import React, { useState } from "react";
import "../screens/SignUp.css";
import QuickBitesLogo from "../images/Logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:4000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = (await response).json();

    json.then((value) => {
      const ans = { value };
      if (!ans.value.success) {
        alert("Enter valid details");
      }
    });
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="form-body">
        <div className="signUp-form">
          <form className="form-signup" onSubmit={handleSubmit}>
            <img src={QuickBitesLogo} alt="logo" className="logo" />
            <Link className="brand_name" to="/">
              Quick Bites
            </Link>
            <h6 className="tagline">Love every Bite</h6>
            <h1 className="h3 m-4 fw-semibold sign-up">Create a New Account</h1>
            <input
              type="text"
              id="inputText"
              className="form-control name"
              placeholder="Full Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />

            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <input
              type="text"
              id="inputAddress"
              className="form-control address"
              placeholder="Address"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
            <button
              className="btn btn-lg btn-primary btn-block w-100 mt-4"
              type="submit"
            >
              Sign Up
            </button>
            <p className="mt-3 copyright">© 2023-2024</p>
          </form>
        </div>
      </div>
    </>
  );
}
