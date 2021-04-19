import { useState } from 'react';
import axios from 'axios';

const Compose = ({ setOpen, getTweets, replying, editing, body, id, author }) => {
	const [
		tweet,
		setTweet
	] = useState(replying ? `Replying to @${author}: \n` : body || '');

	const tweetHandler = async (e) => {
		e.preventDefault();
		console.log(tweet, id);
		try {
			await axios({
				method          : editing ? 'put' : 'post',
				url             : `https://comp426-1fa20.cs.unc.edu/a09/tweets${editing ? '/' + id : ''}`,
				withCredentials : true,
				data            : replying
					? {
							type   : 'reply',
							body   : tweet,
							parent : id
						}
					: {
							body : tweet
						}
			});

			getTweets();
			setOpen();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={() => setOpen()} />
			<div className="modal-content">
				<strong>{editing ? 'Edit Tweet' : 'Compose a Tweet'}</strong>
				<form className="tweet-compose-box" onSubmit={(e) => tweetHandler(e)}>
					<textarea
						placeholder={editing ? '' : "What's on your mind?"}
						value={tweet}
						onChange={(e) => setTweet(e.target.value)}
					/>
					<div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
						<button type="submit">{editing ? 'Save' : 'Send'} Tweet</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Compose;
