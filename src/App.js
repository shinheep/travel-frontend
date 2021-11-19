import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import TeamPage from './Components/TeamPage';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<SignUp />} />
				<Route path='/' element={<Login />} />
				<Route path='/' element={<CreatePost />} />
				<Route path='/' element={<Feed />} />
				<Route path='/' element={<TeamPage />} />
				<Route path='/' element={<Footer />} />
			</Routes>
		</div>
	);
}

export default App;
