import s from './Score.module.css';

export default function Score({player1, player2}) {
    return(
        <section  className={s.scoreWrap}>
                <div id="player1" className={s.scorePlayer}>
                <span>{player1.name}</span>
                    <span>{player1.victory}</span>
                </div>
                <h2>SCORE</h2>
                <div id="player2" className={s.scorePlayer}>
                    <span>{player2.name}</span>
                    <span>{player2.victory}</span>
                </div>
        </section>
    )
}