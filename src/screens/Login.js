import React, { useState } from "react";
import "../screens/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import QuickBitesLogo from "../images/Logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = (await response).json();

    json.then((value) => {
      const ans = { value };
      if (!ans.value.success) {
        alert("Enter valid details");
      } else {
        localStorage.setItem("authToken", ans.value.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
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
          <form className="form-signup " onSubmit={handleSubmit}>
            <img src={QuickBitesLogo} alt="logo" className="logo" />
            <Link className="brand_name" to="/">
              Quick Bites
            </Link>
            <h6 className="tagline">Love every Bite</h6>
            <h1 className="h3 m-4 fw-semibold sign-up fs-3">Login</h1>

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
            <button
              className="btn btn-lg btn-primary btn-block w-100 mt-4"
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-3 copyright">© 2023-2024</p>
          </form>
        </div>
      </div>
    </>
  );
}
