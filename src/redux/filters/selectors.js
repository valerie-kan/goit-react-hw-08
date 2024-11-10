import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
