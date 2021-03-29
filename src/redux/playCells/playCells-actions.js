import { CELLS_TYPE } from './playCells-types';

export const addMarkCells = ({ id, suit }) => (dispatch) =>
  dispatch({
    type: CELLS_TYPE,
    payload: (state) => {
        const newPlayCells = [...state.cells];
        newPlayCells[id] = suit;
        return {
            ...state,
            cells: newPlayCells,
        }
    }
  })

export const refreshCells = () => (dispatch) =>
  dispatch({
    type: CELLS_TYPE,
    payload: (state) => ({
        ...state,
        cells: ["", "", "", "", "", "", "", "", ""],
    })
  })

export const increaseCount = () => (dispatch) =>
  dispatch({
    type: CELLS_TYPE,
    payload: (state) => ({
        ...state,
        count: state.count+1,
    })
  })

export const refreshCount = () => (dispatch) =>
  dispatch({
    type: CELLS_TYPE,
    payload: (state) => ({
        ...state,
        count: 0,
    })
  })

export const toggleShowCellsScreen = () => (dispatch) =>
  dispatch({
    type: CELLS_TYPE,
    payload: (state) => ({
        ...state,
        showCellsScreen: !state.showCellsScreen,
    })
  })