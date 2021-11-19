import React, {useState, useEffect} from 'react'

function Feed() {

	const [feedData, setFeedData] = useState([])

	const makeApiCall = () => {
		fetch("https://travelgram-app-heroku.herokuapp.com/post")
		.then((res) => res.json())
		.then((data) => console.log(ImageData));
	}

	useEffect(() => {
		makeApiCall()
	}, [])

	return (
    <div className="Feed">
      <h1>Feed</h1>
    </div>
  );
}

export default Feed;
