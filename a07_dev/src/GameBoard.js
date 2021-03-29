const GameBoard = ({ gameState }) => {
	const tiles = gameState.board.map((tile, i) => (
		<div className="tile" key={i}>
			<span>{tile !== 0 ? tile : null}</span>
		</div>
	));

	let rows = [];

	while (tiles.length) {
		const currRow = [];
		for (let i = 0; i < 4; i++) {
			currRow.push(tiles.shift());
		}
		rows.push(currRow);
	}

	rows = rows.map((row, i) => (
		<div className="row" key={i}>
			{row}
		</div>
	));

	return <div className="board">{rows}</div>;
};

export default GameBoard;
