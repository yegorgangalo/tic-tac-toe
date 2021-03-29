import { PLAYER_TYPE } from './players-types';

export const setCurrentPlayer = (playerObj) => (dispatch) =>
  dispatch({
    type: PLAYER_TYPE,
    payload: (state) => ({
        ...state,
        currentPlayer: playerObj,
    })
  })

export const setPlayer1 = (playerObj) => (dispatch) =>
  dispatch({
    type: PLAYER_TYPE,
    payload: (state) => ({
        ...state,
        player1: playerObj,
    })
  })

export const setPlayer2 = (playerObj) => (dispatch) =>
  dispatch({
    type: PLAYER_TYPE,
    payload: (state) => ({
        ...state,
        player2: playerObj,
    })
  })

export const increaseVictory1 = () => (dispatch) =>
  dispatch({
    type: PLAYER_TYPE,
    payload: (state) => ({
        ...state,
        player1: {
            ...state.player1,
            victory: state.player1.victory + 1,
        }
    })
  })

export const increaseVictory2 = () => (dispatch) =>
  dispatch({
    type: PLAYER_TYPE,
    payload: (state) => ({
        ...state,
        player2: {
            ...state.player2,
            victory: state.player2.victory + 1,
        }
    })
  })









// import { createAction } from '@reduxjs/toolkit';

// export const setCurrentPlayer = createAction('currentPlayer/set');
// export const setPlayer1 = createAction('player1/set');
// export const setPlayer2 = createAction('player2/set');
// export const increaseVictory1 = createAction('player1/increaseVictory');
// export const increaseVictory2 = createAction('player2/increaseVictory');