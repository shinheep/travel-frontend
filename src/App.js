import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import CreatePost from "./Components/CreatePost/CreatePost";
import Feed from "./Components/Feed/Feed";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import TeamPage from "./Components/TeamPage/TeamPage";
import UserContext from "./context/userContext";
import { Route, Routes } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:8080/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:8080/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Nav />
        <Routes>
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/feed" element= {<Feed />}/>
          <Route exact path="/createPost" element={<CreatePost />} />
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/teamPage" element={<TeamPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
