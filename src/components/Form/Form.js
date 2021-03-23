import styles from './Form.module.css';
import { useDispatch } from 'react-redux';
import * as playersActions from '../../redux/players/players-actions';
import * as playCellsActions from '../../redux/playCells/playCells-actions';

import { Form, Field } from 'react-final-form'

function PlayersForm() {
    const dispatch = useDispatch();

    const setPlayers = ({ namePlayer1, namePlayer2, player1Suit }) => {
        const player1Obj = { name: namePlayer1 || "Player1", suit: player1Suit || "X", victory: 0 }
        const player2Obj = { name: namePlayer2 || "Player2", suit: !player1Suit || player1Suit === "X" ? "O" : "X", victory: 0 }
        dispatch(playersActions.setPlayer1(player1Obj));
        dispatch(playersActions.setPlayer2(player2Obj));
        dispatch(playersActions.setCurrentPlayer(player1Obj));
    }

    const formSubmit = (data) => {
        setPlayers(data);
        dispatch(playCellsActions.toggleShowCellsScreen());
    }
    return (
        <Form
            onSubmit={formSubmit}
            render={({handleSubmit, submitting}) => (
            <form autoComplete="on" onSubmit={handleSubmit}>
                <div className={styles.inputName}>
                  <label htmlFor="namePlayer1" >Player1 Name</label>
                  <Field
                    id="namePlayer1"
                    name="namePlayer1"
                    component="input"
                    type="text"
                    placeholder="Antonio"
                  />
                  <label htmlFor="namePlayer2" >Player2 Name</label>
                  <Field
                    id="namePlayer2"
                    name="namePlayer2"
                    component="input"
                    type="text"
                    placeholder="Rozetta"
                  />
                </div>
                <div className={styles.radioGroup} >
                    <label>
                      <Field
                        name="player1Suit"
                        component="input"
                        type="radio"
                        value="X"
                      />{' '}
                      Player1 plays with X
                    </label>
                    <label>
                      <Field
                        name="player1Suit"
                        component="input"
                        type="radio"
                        value="O"
                      />{' '}
                      Player1 plays with O
                    </label>
                </div>
                <button type="submit" disabled={submitting} className={styles.submitBtn} >
                  Submit
                </button>
            </form>
            )}
        />
    )
}

export default PlayersForm;