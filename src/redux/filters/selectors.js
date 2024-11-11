import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    if (Array.isArray(items) && items.length > 0) {
      return items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
    return [];
  }
);
