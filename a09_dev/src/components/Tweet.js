import axios from 'axios';
import { useState } from 'react';

import composeIcon from '../compose_gray.png';
import delteIcon from '../delete.png';
import Compose from './Compose';

const rt = (
	<svg viewBox="0 0 24 24" className="twt-btn">
		<g>
			<path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
		</g>
	</svg>
);

const like = (
	<svg viewBox="0 0 24 24" className="twt-btn">
		<g>
			<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
		</g>
	</svg>
);

const reply = (
	<svg viewBox="0 0 24 24" className="twt-btn">
		<g>
			<path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
		</g>
	</svg>
);

const Tweet = ({ tweet }) => {
	const { author, body, replyCount, likeCount, retweetCount, isLiked, id, isMine } = tweet;

	const [
		liked,
		setLiked
	] = useState(isLiked);

	const [
		likes,
		setLikes
	] = useState(likeCount);

	const [
		editing,
		setEditing
	] = useState(false);

	const [
		replying,
		setReplying
	] = useState(false);

	const toggleLike = async () => {
		if (isMine) {
			return;
		}

		try {
			await axios({
				method          : 'put',
				url             : `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}/${liked ? 'unlike' : 'like'}`,
				withCredentials : true
			});

			setLiked(!liked);
			setLikes(liked ? likes - 1 : likes + 1);
		} catch (e) {
			console.error(e);
		}
	};

	const deleteTweet = async () => {
		try {
			await axios({
				method          : 'delete',
				url             : `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}`,
				withCredentials : true
			});

			window.location.reload();
		} catch (e) {
			console.error(e);
		}
	};

	const retweet = async () => {
		try {
			await axios({
				method          : 'post',
				url             : 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
				withCredentials : true,
				data            : {
					type   : 'retweet',
					parent : id,
					body   : `Retweeted @${author}'s Tweet:\n ${body}`
				}
			});

			window.location.reload();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="card">
			<div>
				<span>
					<strong className="author">@{author}</strong>
				</span>
			</div>
			<span dangerouslySetInnerHTML={{ __html: body }} />
			<div className="tweet-stats">
				<span className="reply" onClick={() => setReplying(true)}>
					{reply} {replyCount}
				</span>
				<span className={`like ${liked ? 'liked' : null}`} onClick={() => toggleLike()}>
					{like} {likes}
				</span>
				<span className="rt" onClick={() => retweet()}>
					{rt} {retweetCount}
				</span>
				{isMine ? (
					<img
						alt="pen"
						src={composeIcon}
						style={{ width: '1rem', height: '1rem' }}
						onClick={() => setEditing(true)}
					/>
				) : null}
				{isMine ? (
					<img
						alt="trash"
						src={delteIcon}
						style={{ width: '1rem', height: '1rem' }}
						onClick={() => deleteTweet()}
					/>
				) : null}
			</div>
			{editing ? <Compose setOpen={setEditing} editing={true} body={body} id={id} /> : null}
			{replying ? <Compose setOpen={setReplying} replying={true} body={body} id={id} author={author} /> : null}
		</div>
	);
};

export default Tweet;
