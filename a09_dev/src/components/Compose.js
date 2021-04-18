import { useState } from 'react';
import axios from 'axios';

const Compose = ({ setOpen }) => {
	const [
		tweet,
		setTweet
	] = useState(null);

	const tweetHandler = async () => {
		try {
			await axios({
				method          : 'post',
				url             : 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
				withCredentials : true,
				data            : {
					body : tweet
				}
			});

			window.location.reload();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={() => setOpen()} />
			<div className="modal-content">
				<strong>Compose a Tweet</strong>
				<textarea placeholder="What's on your mind?" onChange={(e) => setTweet(e.target.value)} />
				<div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
					<span style={{ cursor: 'pointer' }} onClick={() => tweetHandler()}>
						Send Tweet
					</span>
				</div>
			</div>
		</div>
	);
};

export default Compose;
