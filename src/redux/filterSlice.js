import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChanged: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(filterValue) {
        return {
          payload: filterValue,
        };
      },
    },
  },
});
export const { filterChanged } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
