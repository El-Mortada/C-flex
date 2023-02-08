import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ userData, setuserData }) {
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setuserData(null);
    navigate("/login");
  }
  return (
    <nav className="p-2 d-flex justify-content-between">
      <div className="leftNav d-flex align-items-center">
        <h1 className="pe-3 m-0">C-Flex</h1>
        {userData ? (
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="movies">Movies</Link>
            </li>
            <li className="p-2">
              <Link to="people">People</Link>
            </li>
            <li className="p-2">
              <Link to="tv">Tv</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="rightNav d-flex align-items-center">
        <div className="social-icons">
          <i className="fab fa-facebook mx-1"></i>
          <i className="fab fa-instagram mx-1"></i>
          <i className="fab fa-twitter mx-1"></i>
          <i className="fab fa-google mx-1"></i>
        </div>
        {userData ? (
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li className="p-2">
              <Link to="profile">Profile</Link>
            </li>

            <li className="p-2">
              <span className="cursor-pointer" onClick={logOut}>
                LogOut
              </span>
            </li>
          </ul>
        ) : (
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li className="p-2">
              <Link to="login">Login</Link>
            </li>
            <li className="p-2">
              <Link to="register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
