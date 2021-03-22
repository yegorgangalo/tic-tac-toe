import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

// const { addContact: ADD, deleteContact: DELETE, changeFilter: FILTER_CHANGE, getFromLocalStorage: GET} = actions;
const { addNames, deleteNames } = actions;

const initialState = [
    {id: 'id-1', name: 'Player1', suit: "X", victory: 0},
    {id: 'id-2', name: 'Player2', suit: "O", victory: 0},
];

const players = createReducer(initialState, {
    [addNames]: (state, { payload }) => [...state, payload],
    [deleteNames]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    // [GET]: (state, { payload }) => payload,
});

// const filter = createReducer('', {
//     [FILTER_CHANGE]: (state, { payload }) => payload.toLowerCase(),
// })

export default combineReducers({
  players,
//   filter,
});