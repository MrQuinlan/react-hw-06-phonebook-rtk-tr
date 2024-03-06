import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) =>
      (state = state.filter(({ id }) => id !== action.payload)),
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
