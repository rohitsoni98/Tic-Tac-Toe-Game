
import React from "react";

function EndGame({ player, draw }) {
	return (
		<div className="end-game-screen">
			{!draw && <h2 className="win-text">{player ? "X wins the game 🎉🥳" : "O wins the game 🎉🥳"}</h2>}
			{draw && <h2 className="win-text">Draw Game</h2>}
		</div>
	);
}

export default EndGame;