import React, {useState} from 'react';
import './createPost.css';

function CreatePost() {
	const [post, setPost] = useState({username: '', img: '', location: '', price: '', caption: ''})

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		const copy = Object.assign({}, post);
		copy[name] = value
		setPost(copy)
	}
	
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
		.then(response => response.json())
		.then(data => setPost({username: '', img: '', location: '', price: '', caption: ''}))
	}

	return (
    <div className="CreatePost">
      <h1>Create Post</h1>
      <div className="newPostContainer">
		<div className="newPostHeader"> Create New Post</div>
		<form onSubmit={handleSubmit}>
		<div><input onChange={handleChange} name="username" type="text" placeholder="Username" value={post.username} /></div>
			<div><input onChange={handleChange} name="img" type="text" placeholder="Image URL" value={post.img} /></div>
			<div><input onChange={handleChange} name="location" type="text" placeholder="Location" value={post.location}/></div>
			<div><input onChange={handleChange} name="price" type="text" placeholder="Price" value={post.price}/></div>
			<div><input onChange={handleChange} name="caption" type="text" placeholder="Caption" value={post.caption}/></div>
			<div><button type="submit">Post</button></div>
		</form>
      </div>
    </div>
  );
}

export default CreatePost;
