import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';
import CreatePost from './CreatePost';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Posts />}></Route>
				<Route path="/post/:id" element={<Post />}></Route>
				<Route path="/create" element={<CreatePost />}></Route>
			</Routes>
		</div>
	);
}

export default App;
