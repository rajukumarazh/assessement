import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { data } from 'autoprefixer';
import { useLocation } from 'react-router-dom';
function Post() {
	const location = useLocation();
	console.log('location', location);
	const [data, setData] = useState(null);

	var thenum = location?.pathname?.replace(/^\D+/g, '');
	async function getSinglePost() {
		let dt = await axios.get(`https://dummyjson.com/posts/${thenum}`);
		setData(dt?.data);
		console.log('ddddd', dt.data);
	}
	useEffect(() => {
		getSinglePost();
	}, []);
	console.log('location', location);
	return (
		<div className="">
			<div className="max-w-md rounded overflow-hidden shadow-lg">
				<img className="w-full" src="./e2.jpg" alt="Sunset in the mountains" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{data?.title}</div>
					<p className="text-gray-700 text-base">{data?.body}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#photography
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#travel
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#winter
					</span>
				</div>
			</div>
		</div>
	);
}

export default Post;
