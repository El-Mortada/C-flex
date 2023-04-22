/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../store/user/user.reducer";
import "../Navbar/Navbar.css";
import hamburger from "./hamburger.png";
export default function Navbar() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.userData);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    dispatch(setUserData(null));
    navigate("/login");
  }

  const [toggle, setToggle] = useState(false);

  const openMenu = () => setToggle(!toggle);

  return (
    <nav className="p-2 d-flex justify-content-between position-relative">
      <div className="leftNav d-flex align-items-center">
        <h1 className="pe-3 m-0">C-Flex</h1>
        {userData ? (
          <ul className="rightNav list-unstyled d-flex align-items-center m-0">
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
          <>
            <div>
              <ul className="list-unstyled d-flex align-items-center m-0 ">
                <li className="p-2">
                  <Link to="profile">Profile</Link>
                </li>

                <li className="p-2">
                  <span className="cursor-pointer" onClick={logOut}>
                    LogOut
                  </span>
                </li>
              </ul>
              <img
                onClick={openMenu}
                src={hamburger}
                className="image m-0 ms-auto d-none"
                alt="hamburger-icon"
              />
            </div>
            {toggle ? (
              <div className="dropDown position-absolute">
                <div className="toggleMenuList d-flex flex-column justify-content-center align-items-center w-100 h-100">
                  <Link className="mb-3" to="/">
                    Home
                  </Link>
                  <Link className="mb-3" to="movies">
                    Movies
                  </Link>
                  <Link className="mb-3" to="people">
                    People
                  </Link>
                  <Link className="mb-3" to="tv">
                    Tv
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
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
