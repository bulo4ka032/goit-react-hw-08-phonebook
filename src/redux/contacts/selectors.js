export const selectLoading = state => state.contacts.isLoading;
// export const selectFilter = state => state.contacts.filter;
export const selectFilter = state => state.filter.filter;
export const selectAllContacts = state => state.contacts.items;
