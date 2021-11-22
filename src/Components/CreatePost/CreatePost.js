import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Navigate} from 'react-router-dom'
import './createPost.css';

function CreatePost() {
  const [post, setPost] = useState({
    username: "",
    img: "",
    location: "",
    price: "",
    caption: "",
  });

  const [redirect, setRedirect] = useState(false)

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const copy = Object.assign({}, post);
    copy[name] = value;
    setPost(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Travel data submitted!");
    fetch("https://travelgram-app-heroku.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) =>{
        setPost({ username: "", img: "", location: "", price: "", caption: "" })
        setRedirect(true)
      });
  };

  if(redirect) {
    return <Navigate to='/'/>
  }

  return (
    <div className="CreatePost">

      <div className="plusButton">
        <Button variant="outlined">+</Button>
      </div>

      <div className="newPostContainer">
        <div className="newPostHeader"> Create New Post</div>
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <TextField
              className="outlined-textarea"
              label="Username"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={post.username}
            />
          </div>
          <div>
            {" "}
            <TextField
              className="outlined-textarea"
              label="Image URL"
              placeholder="ImageURL"
              onChange={handleChange}
              name="img"
              value={post.img}
            />
          </div>
          <div>
            {" "}
            <TextField
              className="outlined-textarea"
              label="Location"
              placeholder="Location"
              onChange={handleChange}
              name="location"
              value={post.location}
            />
          </div>
          <div>
            {" "}
            <TextField
              className="outlined-textarea"
              label="Price"
              placeholder="Price"
              onChange={handleChange}
              name="price"
              value={post.price}
            />
          </div>
          <div>
            {" "}
            <TextField
              className="outlined-textarea"
              label="Caption"
              placeholder="Caption"
              onChange={handleChange}
              name="caption"
              value={post.caption}
            />
          </div>
          <Button style={{backgroundColor: '#05668d'}} type="submit" variant="outlined" size="large">
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
