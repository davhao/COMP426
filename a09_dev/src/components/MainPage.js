import axios from 'axios';
import { useEffect, useState } from 'react';

import Tweet from './Tweet';
import Compose from './Compose';
import composeIcon from '../compose.png';

const MainPage = () => {
	const [
		tweets,
		setTweets
	] = useState([]);

	useEffect(() => {
		const getTweets = async () => {
			const res = await axios({
				method          : 'get',
				url             : 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
				withCredentials : true
			});
			setTweets(res.data);
		};

		getTweets();
	}, []);

	const [
		isOpen,
		setOpen
	] = useState(false);

	return (
		<div className="mainpage container">
			<h1 className="title">426witter</h1>
			<div className="feed">{tweets.map((t, i) => <Tweet key={i} tweet={t} />)}</div>
			<img className="compose-button" src={composeIcon} alt="compose tweet" onClick={() => setOpen(true)} />
			{isOpen ? <Compose setOpen={setOpen} /> : null}
		</div>
	);
};

export default MainPage;
