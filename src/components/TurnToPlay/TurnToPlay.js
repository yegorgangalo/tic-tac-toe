import s from './TurnToPlay.module.css';

export default function TurnToPlay({ currentPlayer }) {
    return (
        <section>
            <span>Turn to play: </span>
            <span className={s.turnToPlay}>{currentPlayer.name}</span> by <span className={s.turnToPlay}>{currentPlayer.suit}</span>
        </section>
    )
}