import React, { useState, useRef, useEffect } from 'react';
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
	}
	useEffect(() => {
		getItems();
	}, []);

	return (
		<div>
			<div className='menu'>
				<input
					ref={inputSearchText}
					type='text'
					id='form1'
					class='form-control'
					placeholder='Search ....'
				/>
				<button onClick={getItems} type='button' class='btn btn-primary'>
					Search
				</button>
			</div>

			{loadingSpinner ? (
				<div className='loader'></div>
			) : text ? (
				text.hits.map((item) => (
					<div className='contDiv'>
						<ul className='theDiv'>
							<li className='ulist'>
								<div className='item'>
									<span className='topic'>Author</span>
									<br />
									{item.author}
								</div>
								<div className='item'>
									<span className='topic'>Title</span>
									<br />
									{item.title}
								</div>
								<div className='item'>
									<span className='topic'>Created at</span>
									<br />
									{item.created_at}
								</div>
								<div className='item'>
									<span className='topic'>url</span>
									<br />
									{item.url}
								</div>
							</li>
						</ul>
					</div>
				))
			) : (
				<div className='loader'></div>
			)}
		</div>
	);
}
