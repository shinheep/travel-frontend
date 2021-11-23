import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import './Feed.css'

function Feed() {
  const [feedData, setFeedData] = useState([]);

  const makeApiCall = () => {
    fetch("https://travelgram-app-heroku.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => setFeedData(data.post));
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const likeCount = () => {
    console.log("clicked");
  };

  const posts = feedData.map((post) => {
    return (
      <div className="postCard">
        <Card >
          <Card.Img className="postImg" variant="top" src={post.img} />
          <Card.Body>
            <Card.Link onClick={likeCount}>
              <i class="far fa-heart"></i>
            </Card.Link>
            <Card.Title>{post.username}</Card.Title>
            <Card.Text>
              {post.location} <br />
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
