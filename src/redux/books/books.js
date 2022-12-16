import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from './apiConnect';

const initialState = {
  books: [],
  state: null,
};

const books = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

// export const { addBook, removeBook } = books.actions;
export default books.reducer;
