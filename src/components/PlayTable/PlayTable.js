import styles from './PlayTable.module.css';
import PlayCell from '../PlayCell';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import * as playCellsActions from '../../redux/playCells/playCells-actions';
import * as playersActions from '../../redux/players/players-actions';
import { getCells } from '../../redux/playCells/playCells-selectors';
import { getPlayer1, getPlayer2, getCurrentPlayer } from '../../redux/players/players-selectors';

export default function PlayTable() {
    const dispatch = useDispatch();
    const playCells = useSelector(getCells);
    const player1 = useSelector(getPlayer1);
    const player2 = useSelector(getPlayer2);
    const currentPlayer = useSelector(getCurrentPlayer);

    const handleTurn = ({ target: { id, textContent } }) => {
      if (textContent !== "") {
        return;
      }
      dispatch(playCellsActions.increaseCount());
      dispatch(playCellsActions.addMarkCells({ id, suit:currentPlayer.suit }));
      dispatch(playersActions.setCurrentPlayer(currentPlayer.name === player1.name ? player2 : player1));
    }

    return (
        <section className={styles.playTable}>
            {playCells.map((cellContent, idx) => (
              <PlayCell key={shortid.generate()} id={idx} content={cellContent} handleTurn={handleTurn} />
            ))}
        </section>
    )
}