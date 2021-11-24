import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import './Feed.css'

function Feed() {
  const [feedData, setFeedData] = useState([]);
  // const [likeCount, setLikeCount] = useState({likes:0})

  const makeApiCall = () => {
    fetch("https://travelgram-app-heroku.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data.post)
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const likedPost = (id) => {
    fetch("http://localhost:8080/posts/" + id)
    .then((res) => res.json())
    .then((data) => console.log(data));
    console.log("clicked", id);
  };

  const posts = feedData.map((post) => {
    return (
      <div className="postCard">
        <Card>
          <Card.Img className="postImg" variant="top" src={post.img} />
          <Card.Body>
            <Card.Link onClick={() => likedPost(post._id)} key={post._id}>
              <i class="far fa-heart">
              </i>
            </Card.Link>
            <Card.Text>{post.likes[0].likes > 0 ? post.likes[0].likes + " likes": " "} </Card.Text>
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
    <div className="Feed">
      {posts}
    </div>
  );
}

export default Feed;
