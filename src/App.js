import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import TeamPage from './Components/TeamPage';

function App() {
	return (
		<div className='App'>
			<Nav />
			<SignUp />
			<Login />
			<CreatePost />
			<Feed />
			<TeamPage />
			<Footer />
		</div>
	);
}

export default App;
