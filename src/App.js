import React from "react";
import TicTacToe from "./TicTacToe";

const App = () => {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe Game</h1>
      <div className="app">
        <TicTacToe />
      </div>
    </>
  )
}

export default App;