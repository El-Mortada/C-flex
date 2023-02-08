import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function Register() {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    first_name: " ",
    last_name: " ",
    password: "",
    age: "",
    email: "",
  });
  let [errorList, seterrorList] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setisLoading] = useState(false);

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  async function sendUserDataToApi() {
    let { data } = await axios.post(
      `https://sticky-note-fe.vercel.app/signup`,
      user
    );
    if (data.message == "success") {
      setError("");
      setisLoading(false);
      navigate("/login");
    } else {
      setError(data.message);
      setisLoading(false);
    }
  }
  function submitUserData(e) {
    e.preventDefault();
    setisLoading(true);
    console.log(validateUserData());
    let validation = validateUserData();
    if (validation.error != null) {
      seterrorList(validation.error.details);
    } else {
      sendUserDataToApi();
    }
  }

  function validateUserData() {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(16).required(),
      last_name: Joi.string().min(3).max(16).required(),
      age: Joi.string().min(1).max(16).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().required(),
    });
    return scheme.validate(user, { abortEarly: false });
  }
  return (
    <>
      {errorList.map((err, index) => (
        <div key={index} className="alert alert-danger my-2">
          {err.message}
        </div>
      ))}
      {error.length > 0 ? (
        <div className="alert alert-danger my-2">{error}</div>
      ) : (
        ""
      )}

      <form onSubmit={submitUserData}>
        <label htmlFor="first_name">First Name :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="first_name"
        />
        {errorList.filter((err) => err.context.label == "last_name")[0]
          ?.message ? (
          <div className="alert alert-danger my-2">
            {
              errorList.filter((err) => err.context.label == "last_name")[0]
                ?.message
            }
          </div>
        ) : (
          ""
        )}

        <label htmlFor="last_name">Last Name :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="last_name"
        />
        <label htmlFor="age">Age :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="age"
        />
        <label htmlFor="password">Password :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="password"
        />
        <label htmlFor="email">Email :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="email"
        />
        <button type="submit" className="btn btn-primary ">
          {isLoading == true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
}
