import { CELLS_TYPE } from './playCells-types';

const INITIAL_STATE = {
    cells: ["", "", "", "", "", "", "", "", ""],
    count: 0,
    showCellsScreen: false
}

const playCellsReducer = (state = INITIAL_STATE, { type, payload }) => {
    if (type === CELLS_TYPE && typeof payload === 'function') {
        return payload(state);
  }

  switch(type) {
    default:
      return state;
  }
}

export default playCellsReducer;