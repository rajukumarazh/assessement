import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Posts() {
	const [data, setData] = useState(null);
	const [pageNo, setPageNo] = useState(4);
	async function getPosts() {
		let dt = await axios.get(
			`https://dummyjson.com/posts?limit=${pageNo}&select=title,reactions,userId`
		);
		setData(dt.data.posts);
		console.log('dt', dt.data);
	}
	useEffect(() => {
		getPosts();
	}, []);

	const firstEvent = (e) => {
		//console.log(e);
		var bottom =
			e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if (bottom) {
			let pg = pageNo + 1;
			setPageNo(pg);
			getPosts();
		}
	};
	// console.log('pagenuo', pageNo);
	return (
		<div className=" ImageAPI" onScroll={firstEvent}>
			<div className="flex justify-between p-2">
				<h1 className="text-center text-red-500 font-bold text-lg rounded-md">
					All Posts
				</h1>
				<Link to="/create">
					<button className="bg-blue-500 px-2 py-2 font-medium text-white rounded-md">
						Create
					</button>
				</Link>
			</div>
			<div className=" mt-5  min-w-full flex  flex-wrap border-2 gap-5">
				{data?.map((curr) => {
					return (
						<Link to={`/post/:id${curr.userId}`}>
							<div className="max-w-sm rounded overflow-hidden shadow-lg">
								<img
									className="w-full"
									src="./e2.jpg"
									alt="Sunset in the mountains"
								/>
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">{curr.title}</div>
									<p className="text-gray-700 text-base">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Voluptatibus quia, nulla! Maiores et perferendis eaque,
										exercitationem praesentium nihil.
									</p>
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
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Posts;
