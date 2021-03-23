import { PLAYER_TYPE } from './players-types';

const INITIAL_STATE = {
    player1: { name: 'Player1', suit: "X", victory: 0 },
    player2: { name: 'Player2', suit: "O", victory: 0 },
    currentPlayer: null,
}

const playersReducer = (state = INITIAL_STATE, { type, payload }) => {
    if (type === PLAYER_TYPE && typeof payload === 'function') {
        return payload(state);
  }

  switch(type) {
    default:
      return state;
  }
}

export default playersReducer;





// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as actions from './players-actions';

// const { setCurrentPlayer, setPlayer1, setPlayer2, increaseVictory1, increaseVictory2 } = actions;

// const initialState1 = { name: 'Player1', suit: "X", victory: 0 };
// const initialState2 = { name: 'Player2', suit: "O", victory: 0};

// const player1 = createReducer(initialState1, {
//     [setPlayer1]: (_, { payload }) => payload,
//     [increaseVictory1]: (state, _) => ({...state, victory: state.victory + 1}),
// });

// const player2 = createReducer(initialState2, {
//     [setPlayer2]: (_, { payload }) => payload,
//     [increaseVictory2]: (state, _) => ({ ...state, victory: state.victory + 1 }),
// });

// const currentPlayer = createReducer(initialState1, {
//     [setCurrentPlayer]: (_, { payload }) => payload
// });

// export default combineReducers({
//   player1,
//   player2,
//   currentPlayer
// });