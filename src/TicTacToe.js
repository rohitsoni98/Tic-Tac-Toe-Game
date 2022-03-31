import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const InitialState = "";
const Player_X = "X";
const Player_O = "O";

/*

	+---+---+---+
	| 0 | 1 | 2 |
	+---+---+---+
	| 3 | 4 | 5 |
	+---+---+---+
	| 6 | 7 | 8 |
	+---+---+---+

*/
const WinningPosition = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const TicTacToe = () => {

	// our state
	const [grid, setGrid] = useState(Array(9).fill(InitialState));
	const [player, setPlayer] = useState(false);
	const [gameFinished, setGameFinished] = useState(false);
	const [draw, setDraw] = useState(false);

	// Restart game func
	const restartGame = () => {
		setGrid(Array(9).fill(InitialState));
		setGameFinished(false);
		setDraw(false);
	}

	// function which check game is over or not 
	const isGameOver = () => {
		if (!gameFinished) {

			// X Win CHeck
			for (let i = 0; i < 8; i++) {
				if (
					grid[WinningPosition[i][0]] === Player_X &&
					grid[WinningPosition[i][1]] === Player_X &&
					grid[WinningPosition[i][2]] === Player_X
				) {
					setGameFinished(true);
					// console.log("X Wins the Game")
					return;
				}
			}

			// O Win CHeck
			for (let i = 0; i < 8; i++) {
				if (
					grid[WinningPosition[i][0]] === Player_O &&
					grid[WinningPosition[i][1]] === Player_O &&
					grid[WinningPosition[i][2]] === Player_O
				) {
					setGameFinished(true);
					// console.log("O Wins the Game")
					return;
				}
			}

			// Draw Check 
			if (!grid.includes(InitialState)) {
				setDraw(true);
				setGameFinished(true);
				// console.log("No one Wins the Game")
				return;
			}
		}
	}

	isGameOver();




	// handle function for square of TicTacToe
	const handleClick = (id) => {
		// console.log("clicked")
		if (!gameFinished) {
			setGrid(
				grid.map((item, index) => {
					if (index === id) {
						if (player) {
							return Player_O
						} else {
							return Player_X
						}
					} else {
						return item
					}
				})
			)
			setPlayer(!player)
		} else {
			return null;
		}
	}


	return (
		<>
			{!gameFinished && <h2>Its your turn player ( {!player ? "X" : "O"} )</h2>}
			{gameFinished && (
				<EndGame
					player={player}
					draw={draw}
				/>
			)}
			<br></br>
			<br></br>
			<Square clickGrid={grid} handleEvent={handleClick} restartGame={restartGame} />
		</>
	);
}

export default TicTacToe;
