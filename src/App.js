import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import CreatePost from './Components/CreatePost/CreatePost';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import TeamPage from './Components/TeamPage/TeamPage';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route exact path='/Signup' element={<SignUp />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/createPost' element={<CreatePost />} />
				<Route exact path='/' element={<Feed />} />
				<Route exact path='/teamPage' element={<TeamPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
