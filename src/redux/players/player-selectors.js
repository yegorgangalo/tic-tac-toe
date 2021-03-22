// import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.players.items;
// export const getFilter = state => state.contacts.filter;

// export const getFilteredContacts = state => {
//     const contacts = getItems(state);
//     const filter = getFilter(state);
//     return contacts.filter(contact =>
//       Object.values(contact)
//         .some(val => val.toString().toLowerCase().includes(filter)));
// }

// export const getFilteredContacts = createSelector(
//     [getItems, getFilter],
//     (contacts, filter) =>
//         contacts.filter(contact =>
//             Object.values(contact).some(val =>
//                 val.toString().toLowerCase().includes(filter)))
// )