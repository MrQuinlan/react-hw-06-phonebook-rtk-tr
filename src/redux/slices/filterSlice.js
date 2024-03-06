import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (state, action) => (state = action.payload),
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
