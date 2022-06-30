import React, { useState, useRef } from 'react';
import './loaderSpinner.css';
import axios from 'axios';
import TheElement from './TheElement';

export function Content() {
	// const [searchText, SetSearch] = useState(
	// 	document.querySelector('.Inputtext')
	// );
	const inputSearchText = useRef();

	const [res, setRes] = useState('');
	const [loadingSpinner, SetSpinner] = useState(false);
	const [text, setText] = useState();

	function getItems() {
		SetSpinner(true);
		const theText = inputSearchText.current.value;
		fetch(
			'http://hn.algolia.com/api/v1/search?query=' +
				theText +
				'&tags=(story,poll,comment)'
		)
			.then((response) => response.json())
			.then((resp) => {
				if (resp) {
					console.log('SUCCESS');
					setText(resp);
					setRes(JSON.stringify(resp));
					console.log(resp);
					SetSpinner(false);
				} else {
					console.log('NOT SUCCESSFUL');
				}
			})
			.catch((error) => console.log(error));

		// try {
		// 	const response = await axios.get('https://hn.algolia.com/api/v1/items/1');
		// 	console.log(response.data.children);
		// 	return response.data;
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	return (
		<div className='App'>
			<input
				type='text'
				className='Inputtext'
				placeholder='Searching .....'
				ref={inputSearchText}
			></input>

			<button onClick={getItems}>Search</button>
			{
				loadingSpinner ? (
					<div className='loader'></div>
				) : text ? (
					text.hits.map((item) => <div>{item.author}</div>) +
					' .... ' +
					text.hits[0].title +
					' .... ' +
					text.hits[0].created_at +
					' .... ' +
					text.hits[0].url
				) : (
					<div className='loader'></div>
				)

				// 	text.map((el) => {
				// 		return <TheElement elem={el} />;
				// 	})
			}
		</div>
	);
}
