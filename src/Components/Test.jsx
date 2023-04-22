/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Test() {
  let [form, setForm] = useState({
    name: "",
    job_title: "",
    bio: "",
    email: "",
    phone: "",
    birthday: "",
    gender: "",
    is_active: "",
    profile_picture: "",
  });
  let [errorList, seterrorList] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setisLoading] = useState(false);
  let [user, setUser] = useState({});

  function getUserData(e) {
    let myUser = { ...form };
    myUser[e.target.name] = e.target.value;
    setForm(myUser);
    console.log(form);
  }

  const [userToken, setUserToken] = useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2xpbmthdGVlLmNvbS9hcGkvdXNlckxvZ2luIiwiaWF0IjoxNjgxNDgwNzk1LCJleHAiOjE2ODE0ODQzOTUsIm5iZiI6MTY4MTQ4MDc5NSwianRpIjoicVgzbjA2MTVlWkpYdnk3eiIsInN1YiI6IjE5IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.A54R4xk5HTiI_0HYoqnVqVPAanLOLA_WifHbiKHCgZM"
  );

  useEffect(() => {
    sendUserDataToApi();
  }, []);

  async function sendUserDataToApi() {
    let getResponse = await fetch(
      `https://linkatee.com/api/show-user?username=mortada`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer" + userToken,
        },
      }
    );
    let responseData = await getResponse.json();
    console.log(responseData.user.username);
    // let responseData = await getResponse.json();
    // console.log(responseData);

    // let response = await axios.post(
    //   `https://mashro3ylink.com/api/v1/clients/links`,
    //   headers,
    //   form
    // );

    // let { data } = await axios.get(
    //   `https://mashro3ylink.com/api/v1/clients/account/me`,
    //   options
    // );
  }
  function submitUserData(e) {
    e.preventDefault();
    setisLoading(true);
    sendUserDataToApi();
  }

  return (
    <>
      <form onSubmit={submitUserData}>
        <label htmlFor="name">name :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="name"
        />
        <label htmlFor="job_title">job_title :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="job_title"
        />
        <label htmlFor="bio">bio :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="bio"
        />
        <label htmlFor="email">email :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="email"
        />
        <label htmlFor="phone">phone :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="phone"
        />
        <label htmlFor="birthday">birthday :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="birthday"
        />
        <label htmlFor="gender">gender :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="gender"
        />
        <label htmlFor="profile_picture">picture :</label>
        <input
          // onChange={(event) => {
          //   this.readFile(event);
          // }}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const readImage = new FileReader();
            readImage.readAsDataURL(e.target.files[0]);
            readImage.onloadend = function () {
              console.log(readImage.result);
              // const img = new Image();
              // img.src = readImage.result;
              // form.profile_picture = img.src;
            };
            console.log(e.target.value);
            console.log(e.target.files[0]);
            form.profile_picture = e.target.files[0];
          }}
          className="form-control bg-transparent text-white my-2"
          name="profile_picture"
        />
        {/* <label htmlFor="active_type_icon">active_type_icon :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="active_type_icon"
        />
        <label htmlFor="custom_css">custom_css :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="custom_css"
        />
        <label htmlFor="button_id">button_id :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="button_id"
        />
        <label htmlFor="is_active">is_active :</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control bg-transparent text-white my-2"
          name="is_active"
        /> */}
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </>
  );
}
