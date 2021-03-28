import { useState, useEffect } from 'react';
import './App.css';
import Game from './game';
import GameBoard from './GameBoard';

function App() {
	const [
		game,
		setGame
	] = useState(new Game(4));
	const [
		gameState,
		setGameState
	] = useState(game.getGameState());

	useEffect(() => {
		document.addEventListener('keydown', parseKey);
		registerOnMove();

		return () => {
			document.removeEventListener('keydown', parseKey);
		};
	}, []);

	const parseKey = (e) => {
		console.log(e.key);
		// eslint-disable-next-line default-case
		switch (e.key) {
			case 'ArrowUp':
				game.move('up');
				break;
			case 'ArrowDown':
				game.move('down');
				break;
			case 'ArrowLeft':
				game.move('left');
				break;
			case 'ArrowRight':
				game.move('right');
				break;
		}
	};

	const registerOnMove = () => {
		game.onMove((gameState) => {
			console.log(gameState.board);
			setGameState({ ...gameState });
		});
	};

	return (
		<div className="App">
			<h1>David's 2048</h1>
			<h2 style={gameState.over ? { color: '#ff5555' } : { color: '#8be9fd ' }}>
				{gameState.over ? 'Game Over' : gameState.won ? 'You Win!' : null}
			</h2>
			<div className="game-info">
				<h3>Score: {gameState.score}</h3>
				<h3
					className="reset"
					onClick={() => {
						console.log('reset');
						game.setupNewGame();
						setGame(game);
						setGameState(game.getGameState());
					}}
				>
					Reset Game
				</h3>
			</div>
			<div className="board-wrapper">
				<GameBoard gameState={gameState} />
			</div>
			<div className="instructions">
				<span>
					<strong>HOW TO PLAY:</strong> Use your arrow keys to move the tiles. Tiles with the same number
					merge into one when they touch. Add them up to reach 2048!
				</span>
			</div>
		</div>
	);
}

export default App;
