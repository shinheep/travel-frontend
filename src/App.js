import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import TeamPage from './Components/TeamPage';
// import { Route, Routes } from 'react-router';

function App() {
	return (
		<div className='App'>
			<Nav />
			{/* <Routes> */}
				<SignUp/>
				<Login/>
				<CreatePost/>
				<Feed/>
				<TeamPage/>
				<Footer/>
			{/* </Routes> */}
		</div>
	);
}

export default App;
