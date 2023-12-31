import { Square } from "./Square"
import PropTypes from 'prop-types';


export const GameBoard = ({ board, updateBoard }) => {

    return (
        <section className="game">
            {
                board.map((_, index) => {
                    // board.map((square, index) => {      o puede ser de esta otra manera pero si ponemos esta debemos cambiar abajo el board[index] a square
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {board[index]}
                        </Square>
                    )
                })
            }
        </section>
    )
}

GameBoard.propTypes = {
    board: PropTypes.array,
    updateBoard: PropTypes.func
}