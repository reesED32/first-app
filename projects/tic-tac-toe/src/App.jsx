import { useState } from "react"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { GameBoard } from "./components/GameBoard.jsx"
import { Players } from "./components/Players.jsx"


function App() {
  // const [board, setBoard] = useState(Array(9).fill(null))  // así se inicializa si no usamos localStorage
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  // const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null es que no hay ganardor, false es un empate
  const [winner, setWinner] = useState(null)



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  const updateBoard = (index) => {
    // no actualizamos esta posición si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // se guarda aquí la partida antes del último movimiento
    window.localStorage.setItem('board', JSON.stringify(newBoard))  // se convierte a string porque el localStorage lo que guarda es un string
    window.localStorage.setItem('turn', newTurn)
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <GameBoard board={board} updateBoard={updateBoard} />

      <Players turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>

  )
}

export default App
