import styles from './Score.module.css';
import { useSelector } from 'react-redux';
import { getPlayer1, getPlayer2 } from '../../redux/players/players-selectors';

export default function Score() {
    const player1 = useSelector(getPlayer1);
    const player2 = useSelector(getPlayer2);

    return(
        <section  className={styles.scoreWrap}>
                <div id="player1" className={styles.scorePlayer}>
                    <span>{player1.name}</span>
                    <span>{player1.victory}</span>
                </div>
                <h2>SCORE</h2>
                <div id="player2" className={styles.scorePlayer}>
                    <span>{player2.name}</span>
                    <span>{player2.victory}</span>
                </div>
        </section>
    )
}