import React from "react";

const Square = ({ clickGrid, handleEvent, restartGame }) => {

	return (
		<div>
			<div className="board">
				{clickGrid.map((item, index) => {
					if (item === "") {
						return (
							<div key={index} className="square" onClick={() => handleEvent(index)}>
								{item}
							</div>
						)
					} else {
						return (
							<div key={index} className="square">
								{item}
							</div>
						)
					}
				})}
			</div>
			<br></br>
			<br></br>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<button className="btn" onClick={restartGame}>Restart Game</button>
				
			</div>
		</div>
	)
}

export default Square;