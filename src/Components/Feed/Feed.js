import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { Card } from "react-bootstrap";
import './Feed.css'
import { DataArrayRounded } from "@mui/icons-material";

function Feed(props) {
  const { userData } = useContext(UserContext);
  const [feedData, setFeedData] = useState([]);

  const makeApiCall = () => {
    if (userData.user) {
    fetch(
      "https://travelgram-app-heroku.herokuapp.com/users/" +
        userData.user.username
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data.user.posts);
      });
    }
  };

  useEffect(() => {
    makeApiCall();
  }, [userData]);

  const [likeCount, setLikeCount] = useState({likes:0})

  const likedPost = (id) => {
    fetch("https://travelgram-app-heroku.herokuapp.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("clicked", id);
  };

  const posts =
    feedData &&
    feedData.map((post) => {
      return (
        <div className="postCard">
          <Card>
            <Card.Img className="postImg" variant="top" src={post.img} />
            <Card.Body>
              <Card.Link onClick={() => likedPost(post._id)} key={post._id}>
                <i class="far fa-heart"></i>
              </Card.Link>
              {/* <Card.Text>{post.likes[0].likes > 0 ? post.likes[0].likes + " likes": " "} </Card.Text> */}
              <Card.Title>{post.username}</Card.Title>
              <Card.Text>
                <i class="fas fa-map-marker-alt"></i> {post.location} <br />
                Price: {post.price} <br />
                {post.caption}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });

  return (
    <div>
    <div className='loginMessage'>
      {userData.user ? (
        <h1>Welcome {userData.user.name}</h1>
      ) : (
        <>
          <h2>Uh oh.  Looks like you are not logged in. Login to view your feed.</h2>
          <Link to="/">Login</Link>
        </>
      )}
      {/* {feedData ? {posts} : "" } */}
    </div>
    <div className="Feed">{posts}</div>
    </div>
);
}


export default Feed;
