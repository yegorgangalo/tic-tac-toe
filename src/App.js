import { useEffect, useCallback } from 'react';
import Modal from './components/Modal';
import Form from './components/Form';
import PlayScreen from './components/PlayScreen';
import TurnToPlay from './components/TurnToPlay';
import PlayTable from './components/PlayTable';
import Score from './components/Score';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayer1, getCurrentPlayer } from './redux/players/players-selectors';
import { getCount, getCells, getShowCellsScreen } from './redux/playCells/playCells-selectors';
import * as playersActions from './redux/players/players-actions';
import * as playCellsActions from './redux/playCells/playCells-actions';

const winCombinations = [
	  	[0, 1, 2],
	  	[3, 4, 5],
	  	[6, 7, 8],
	  	[0, 3, 6],
	  	[1, 4, 7],
	  	[2, 5, 8],
	  	[0, 4, 8],
	  	[2, 4, 6],
    ];


const isWinner = (cellCollection, countValue) => {
  if (countValue < 5) {
    return;
  }
  const winComboIdx = winCombinations.findIndex(combo => {
      const cell1 = cellCollection[combo[0]];
      const cell2 = cellCollection[combo[1]];
      const cell3 = cellCollection[combo[2]];
      return cell1 === cell2 && cell2 === cell3 && cell3 !== "";
      }
  )
  return winComboIdx > -1;
}

function App() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const playCells = useSelector(getCells);
  const showCellsScreen = useSelector(getShowCellsScreen);
  const player1 = useSelector(getPlayer1);
  const currentPlayer = useSelector(getCurrentPlayer);

  const addPlusOneVictory = useCallback(() => {
    const increaseVictory = currentPlayer.name === player1.name
      ? playersActions.increaseVictory2
      : playersActions.increaseVictory1;
    dispatch(increaseVictory());
  }, [currentPlayer, player1, dispatch]);

  const refreshPlayCells = useCallback(() => {
    dispatch(playCellsActions.refreshCells());
    dispatch(playCellsActions.refreshCount());
  }, [dispatch]);

  useEffect(() => {
    if (isWinner(playCells, count)) {
      addPlusOneVictory();
      refreshPlayCells();
    }
  }, [count, playCells, addPlusOneVictory, refreshPlayCells])

   useEffect(() => {
    if (count >= 9) {
      refreshPlayCells();
    }
  }, [count, refreshPlayCells])

  return (
    <div>
      {showCellsScreen
        ? <PlayScreen >
            <TurnToPlay />
            <PlayTable/>
            <Score/>
          </PlayScreen>
        : <Modal>
            <Form/>
          </Modal>}
    </div>
  );
}

export default App;