import { Button } from '@material-ui/core';
import s from './PlayScreen.module.css';

export default function PlayScreen({toggleScreens, refreshPlayCells, children}) {

    const restartGame = () => {
        toggleScreens();
        refreshPlayCells();
    }

    return (
        <div className={s.containerXO}>
            <h1>Tic Tac Toe</h1>
            {children}
            <section className={s.refresh}>
                <Button type="button" color="primary" variant="contained" className={s.btn} >Refresh Battle</Button>
                <Button type="button" color="primary" variant="contained" className={s.btn} onClick={restartGame} >Restart Game</Button>
            </section>
        </div>
    )
}