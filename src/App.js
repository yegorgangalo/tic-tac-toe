import { useState, useEffect } from 'react';
import './App.module.css';
import Modal from './components/Modal';
import Form from './components/Form';
import PlayScreen from './components/PlayScreen';
import TurnToPlay from './components/TurnToPlay';
import PlayTable from './components/PlayTable';
import Score from './components/Score';


function App() {
  const [showModal, setShowModal] = useState(true);
  const [showPlayScreen, setShowPlayScreen] = useState(false);
  const [player1, setPlayer1] = useState({name: "Player1", suit: "X", victory: 0});
  const [player2, setPlayer2] = useState({name: "Player2", suit: "O", victory: 0});
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [playCells, setPlayCells] = useState(["","","","","","","","",""]);

  const refreshPlayCells = () => {
      setPlayCells(["", "", "", "", "", "", "", "", ""]);
    }

  useEffect(() => {
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

    const isWinner = (cellCollection) => {
        return !!winCombinations.find(combo => {
            const cell1 = cellCollection[combo[0]];
            const cell2 = cellCollection[combo[1]];
            const cell3 = cellCollection[combo[2]];
            return cell1 === cell2 && cell2 === cell3 && cell3 !== "";
            }
        )
    }

    const isAllCellsMarked = () => {
      return playCells.find(cell => !cell)===undefined;
    }

    const addPlusOneVictory = () => {
      currentPlayer.name === player1.name
        ? setPlayer1({ ...player1, victory: player1.victory += 1 })
        : setPlayer2({ ...player2, victory: player2.victory += 1 });
    }

    if (isWinner(playCells)) {
      addPlusOneVictory();
      refreshPlayCells();
      return;
    }

    if (isAllCellsMarked()) {
      refreshPlayCells();
    }
  }, [playCells, currentPlayer.name, player1, player2])

  const toggleScreens = () => {
    setShowModal(!showModal);
    setShowPlayScreen(!showPlayScreen);
  };

  const setPlayers = ({namePlayer1, namePlayer2, player1Suit}) => {
    const player1Obj = {name: namePlayer1 || "Player1", suit: player1Suit || "X", victory: 0}
    const player2Obj = { name: namePlayer2 || "Player2", suit: player1Suit === "X" ? "O" : "X", victory: 0 }
    setPlayer1(player1Obj);
    setPlayer2(player2Obj);
  }

  const handleTurn = ({ target: { id, textContent } }) => {
    if (textContent !== "") {
      return;
    }
    const newPlayCells = [...playCells];
    newPlayCells[id] = currentPlayer.suit;
    setPlayCells(newPlayCells)
    setCurrentPlayer(currentPlayer.name===player1.name ? player2 : player1)
  }

  return (
    <div>
      {showModal && <Modal>
        <Form toggleScreens={toggleScreens} setPlayers={setPlayers}/>
      </Modal>}
      {showPlayScreen && <PlayScreen toggleScreens={toggleScreens} refreshPlayCells={refreshPlayCells} >
        <TurnToPlay currentPlayer={currentPlayer} />
        <PlayTable playCells={playCells} handleTurn={handleTurn}/>
        <Score player1={player1} player2={player2} />
      </PlayScreen>}
    </div>
  );
}

export default App;
