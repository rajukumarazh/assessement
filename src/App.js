import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Posts />}></Route>
				<Route path="/post/:id" element={<Post />}></Route>
			</Routes>
		</div>
	);
}

export default App;
