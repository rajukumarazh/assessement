import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreatePost() {
	const [data, setData] = useState({ body: '', userId: '' });
	const [response, setResponse] = useState(false);
	console.log('data', data);

	async function post() {
		let da = await axios.post('https://dummyjson.com/posts/add', data);
		console.log('data', da);

		if (da !== undefined) {
			setResponse(true);
			alert('post created successfully');
		}
	}
	return (
		<div>
			{response == true && (
				<h1 className="text-green-600 text-center">
					{' '}
					Hurrah!
					<br />
					Post created successfully
				</h1>
			)}

			<div className="flex gap-5 p-4">
				<input
					type={'text'}
					onChange={(e) => setData({ ...data, body: e.target.value })}
					placeholder="enter posts "
					className="px-2 py-2 bg-gray rounded-md border-spacing-1 border-2 p-2"
				></input>
				<input
					type={'text'}
					onChange={(e) => setData({ ...data, userId: e.target.value })}
					placeholder="id"
					className="px-2 py-2 bg-gray rounded-md border-spacing-1 border-2 p-2"
				></input>
				<button
					className="bg-blue-500 px-2 py-2 font-medium text-white rounded-md"
					onClick={() =>
						data.userId && data.body !== undefined
							? post()
							: alert('please fill details')
					}
				>
					Create-Post
				</button>
				<Link to="/">
					<button className="bg-red-400 px-2 py-2 font-medium text-white rounded-md">
						Back
					</button>
				</Link>
			</div>
		</div>
	);
}

export default CreatePost;
