import { createAction } from '@reduxjs/toolkit';

export const addNames = createAction('name/add');
export const deleteNames = createAction('name/delete');
// export const changeFilter = createAction('filter/change');
// export const getFromLocalStorage = createAction('contacts/get');