import { TURNS } from "../constants"
import { Square } from "./Square"
import PropTypes from 'prop-types';

export const Players = ({ turn }) => {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
                {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
                {TURNS.O}
            </Square>
        </section>
    )
}

Players.propTypes = {
    turn: PropTypes.string
}