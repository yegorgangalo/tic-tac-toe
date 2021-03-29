import { Button } from '@material-ui/core';
import styles from './PlayScreen.module.css';
import { useDispatch } from 'react-redux';
import * as playCellsActions from '../../redux/playCells/playCells-actions';

export default function PlayScreen({children}) {
    const dispatch = useDispatch();

    const refreshPlayCells = () => {
        dispatch(playCellsActions.refreshCells());
        dispatch(playCellsActions.refreshCount());
    }

    const restartGame = () => {
        dispatch(playCellsActions.toggleShowCellsScreen());
        refreshPlayCells();
    }

    return (
        <div className={styles.containerXO}>
            <h1>Tic Tac Toe</h1>
            {children}
            <section className={styles.refresh}>
                <Button type="button" color="primary" variant="contained" className={styles.btn} onClick={refreshPlayCells} >
                    Refresh Battle
                </Button>
                <Button type="button" color="primary" variant="contained" className={styles.btn} onClick={restartGame} >
                    Restart Game
                </Button>
            </section>
        </div>
    )
}