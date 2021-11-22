import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import CreatePost from './Components/CreatePost/CreatePost';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import TeamPage from './Components/TeamPage/TeamPage';
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
