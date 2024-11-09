import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contactsList.contacts.items;
export const selectLoading = (state) => state.contactsList.contacts.loading;
export const selectError = (state) => state.contactsList.contacts.error;
export const selectNameFilter = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
