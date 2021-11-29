import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import CreatePost from "./Components/CreatePost/CreatePost";
import Feed from "./Components/Feed/Feed";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Explore from "./Components/Explore/Explore"
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

  // const allUsersData = 

  const [feedData, setFeedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "https://travelgram-app-heroku.herokuapp.com/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("https://travelgram-app-heroku.herokuapp.com/users/", {
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

  console.log(userData)

  // const makeApiCall = () => {
  //   fetch("https://travelgram-app-heroku.herokuapp.com/users" + userData.user)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     });
  // };

  // useEffect(() => {
  //   makeApiCall();
  // }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newFeed = feedData.filter((post) => {
		  console.log(post.location.concat(''))
		//  return (Object.values(post).join('').toLowerCase().includes(searchTerm))

	 
        // return Object.values(post)
        //   .join("")
        //   .toLowerCase()
        //   .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newFeed);
    } else {
      setSearchResults(feedData);
    }
  };




  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Nav term={searchTerm} searchKeyword={searchHandler}/>
        <Routes>
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/feed" element= {<Feed  feedData={feedData}/>}/>
          <Route exact path="/createPost" element={<CreatePost />} />
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/teamPage" element={<TeamPage />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
        {/* <Explore /> */}
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
