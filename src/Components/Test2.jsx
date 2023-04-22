import axios from "axios";
import React, { useEffect } from "react";

export default function Test2() {
  async function testApi() {
    const options = {
      headers: {
        Accept: "application / json",
        "Content-Type": "application/json",
      },

      username: "ahmed",
      password: 12345678,
    };
    let { data } = await axios.post(
      `https://mashro3ylink.com/api/v1/clients/auth/login`,
      options
    );
    console.log(data);
    localStorage.setItem("userToken", data.data.access_token);
  }

  useEffect(() => {
    testApi();
  }, []);

  return <>Test</>;
}