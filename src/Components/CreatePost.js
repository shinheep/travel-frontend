// import { Card, Button } from "react-bootstrap";
import '../createPost.css'

function CreatePost() {
  return (
    <div className="CreatePost">
      <h1>Create Post</h1>
      <div className="newPostContainer">
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
		<div className="newPostHeader"> Create New Post</div>
		<div className="newPostUrl">Pic</div>
		<div className="Destination">Destination</div>
		<div className="Caption">Caption</div>
		<button>Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
