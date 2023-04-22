import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const userData = useSelector((state) => state.users.userData);
  let { first_name, last_name, age, email } = userData;
  return (
    <>
      <h4>
        Name: {first_name} {last_name}
      </h4>
      <h4>Age: {age}</h4>
      <h4>email: {email}</h4>
    </>
  );
}
