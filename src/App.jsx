/** @format */

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import Tv from "./Components/Tv/Tv";
import jwtDecode from "jwt-decode";

import Profile from "./Components/Profile/Profile";
import { useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/user/user.reducer";
import Test from "./Components/Test";
import Test2 from "./Components/Test2";

function App() {
  const dispatch = useDispatch();
  // let { userData, setuserData } = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    dispatch(setUserData(decodedToken));
  }

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "itemdetails/:id/:media_type",
          element: (
            <ProtectedRoute>
              <ItemDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: <Login saveUserData={saveUserData} />,
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "test",
          element: <Test />,
        },
        {
          path: "test2",
          element: <Test2 />,
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute>
              <Tv />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
