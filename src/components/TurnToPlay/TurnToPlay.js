import styles from './TurnToPlay.module.css';
import { useSelector } from 'react-redux';
import { getCurrentPlayer } from '../../redux/players/players-selectors';

export default function TurnToPlay() {
    const currentPlayer = useSelector(getCurrentPlayer);
    return (
        <section>
            <p>Turn to play: </p>
            <p>
                <span className={styles.turnToPlay}>{currentPlayer.name} </span>
                by
                <span className={styles.turnToPlay}> {currentPlayer.suit}</span>
            </p>
        </section>
    )
}