/*
Add your code for Game here
 */

/**
 * Represents a 2048 Game
 * @constructor
 * @param {number} size - Size of size x size board
 */
export default class Game {
	constructor(size) {
		this.size = size;

		// Init gameState
		this.gameState = {
			board : null,
			score : 0,
			won   : false,
			over  : false
		};

		this.setupNewGame();

		this.boardObservers = {
			move : [],
			win  : [],
			lose : []
		};
	}

	/**
     * 
     * @returns an accurate gameState object representing the current game state.
     */
	getGameState() {
		return this.gameState;
	}

	/**
     * Sets up new board and pushes it to gameState
     */
	setupNewGame() {
		// Fill Board
		const board = [];
		for (let i = 0; i < this.size ** 2; i++) {
			board.push(0);
		}

		this.gameState.board = board;

		this.generateTile();
		this.generateTile();
	}

	/**
     * Picks an empty tile on the board and a generates a new tile with a 90% chance of being a 2 and a 10% chance of being a 4
    */
	generateTile = () => {
		// Pick empty tile
		let index = Math.floor(Math.random() * this.size ** 2);
		while (this.gameState.board[index] !== 0) {
			index = Math.floor(Math.random() * this.size ** 2);
		}

		// Fill tile
		const seed = Math.random();
		this.gameState.board[index] = seed < 0.9 ? 2 : 4;
	};

	/**
     *  Replaces current gameState with gameState param
     * @param {Object} gameState - new gameState object
     */
	loadGame(gameState) {
		this.gameState = gameState;
	}

	/**
     * 
     * @param {string} direction - Given "up", "down", "left", or "right" as string input, it makes the appropriate shifts and adds a random tile.
     * @param {boolean} immutable - Set true to disable mutation of the gameState, useful for checking game loss
     * @returns {boolean} True if legal move exists (if immutable = true) / has been made (if immutable = false)
     */
	move(direction, immutable = false) {
		let legal = false;
		switch (direction) {
			case 'up':
				for (let i = 0; i < this.size; i++) {
					const indices = [];
					for (let j = i; j < this.size ** 2; j += this.size) {
						indices.push(j);
					}
					const legalSection = this.slideArray(indices, immutable);
					legal = legal || legalSection;
				}
				break;
			case 'down':
				for (let i = this.size ** 2 - 1; i >= 0; i--) {
					const indices = [];
					for (let j = i; j >= 0; j -= this.size) {
						indices.push(j);
					}
					const legalSection = this.slideArray(indices, immutable);
					legal = legal || legalSection;
				}
				break;
			case 'left':
				for (let i = 0; i < this.size ** 2; i += this.size) {
					const indices = [];
					for (let j = i; j < i + this.size; j++) {
						indices.push(j);
					}

					const legalSection = this.slideArray(indices, immutable);
					legal = legal || legalSection;
				}
				break;
			case 'right':
				for (let i = this.size - 1; i < this.size ** 2; i += this.size) {
					const indices = [];
					for (let j = i; j > i - this.size; j--) {
						indices.push(j);
					}

					const legalSection = this.slideArray(indices, immutable);
					legal = legal || legalSection;
				}
				break;
		}

		if (!immutable) {
			this.update('move');

			if (legal) {
				this.generateTile();
			}
			console.log(this.toString());

			if (this.checkWin()) {
				this.gameState.won = true;
				this.update('win');
			}
			if (this.checkLoss()) {
				this.gameState.over = true;
				this.update('lose');
			}
		}

		return legal;
	}

	/**
     * Treats every move as a 'left' (<--) move and slides/combines values accordingly 
     * @param {array} indices - Array of indexes of the section to be slid in order ex. left shift of [1, 2, 3] => section = [0, 1, 2]
     * @param {boolean} immutable - Set true to disable mutation of the gameState, useful for checking game loss
     * @returns {boolean} True if the move is legal
     */
	slideArray(indices, immutable) {
		const values = indices.map((i) => this.gameState.board[i]);

		const res = [];

		let prev = null;
		let i = 0;
		while (i < values.length) {
			const curr = values[i];

			if (curr === 0) {
				i++;
				continue;
			}

			if (!prev) {
				prev = curr;
				i++;
				continue;
			}

			if (curr === prev) {
				res.push(curr + prev);
				if (!immutable) {
					this.gameState.score += curr + prev;
				}
				prev = null;
				i++;
			}
			else {
				res.push(prev);
				prev = curr;
				i++;
			}
		}

		if (prev) {
			res.push(prev);
		}

		while (res.length < indices.length) {
			res.push(0);
		}

		let legal = false;
		for (let i = 0; i < values.length; i++) {
			const boardIndex = indices[i];

			legal = legal || this.gameState.board[boardIndex] !== res[i];
			if (!immutable) {
				this.gameState.board[boardIndex] = res[i];
			}
		}

		return legal;
	}

	/**
     * 
     * @returns True if 2048 tile exists
     */
	checkWin = () => {
		return this.gameState.board.includes(2048);
	};

	/**
     * 
     * @returns True if no valid moves left
     */
	checkLoss = () => {
		return !(
			this.move('up', true) ||
			this.move('down', true) ||
			this.move('left', true) ||
			this.move('right', true)
		);
	};

	/**
     * 
     * @returns a string representation of the game as text/ascii. See the gameState section above for an example. The run_in_console.js script uses the toString() method to print the state of the game to the console after every move.
     */
	toString() {
		let stringifiedBoard = '';

		for (let i = 0; i < this.size ** 2; i += this.size) {
			let curr = [];
			for (let j = 0; j < this.size; j++) {
				curr.push(this.gameState.board[i + j]);
			}
			stringifiedBoard += curr.toString();
			stringifiedBoard += '\n';
		}

		return stringifiedBoard;
	}

	/**
     *Takes a callback function as input and registers that function as a listener to the move event. Every time a move is made, the game should call all previously registered move callbacks, passing in the game's current gameState as an argument to the function. 
     * @param {function} callback 
     */
	onMove(callback) {
		this.boardObservers.move.push(callback);
	}

	/**
     * Takes a callback function as input and registers that function as a listener to the win event. When the player wins the game (by making a 2048 tile), the game should call all previously registered win callbacks, passing in the game's current gameState as an argument to the function.
     * @param {function} callback 
     */
	onWin(callback) {
		this.boardObservers.win.push(callback);
	}

	/**
     * Takes a callback function as input and registers that function as a listener to the move event. When the game transitions into a state where no more valid moves can be made, the game should call all previously registered lose callbacks, passing in the game's current gameState as an argument to the function.
     * @param {function} callback 
     */
	onLose(callback) {
		this.boardObservers.lose.push(callback);
	}

	/**
     *  Calls all callbacks registered under the event
     * @param {string} event - Event to be emmitted
     */
	update(event) {
		this.boardObservers[event].forEach((listener) => listener(this.getGameState()));
	}
}
