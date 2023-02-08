import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout({ userData, setuserData }) {
  return (
    <>
      <Navbar userData={userData} setuserData={setuserData} />
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}
