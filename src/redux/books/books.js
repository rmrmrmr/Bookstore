import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'br6bnAI4ueuoOcRkmd1cP',
      title: 'Slaughterhouse-Five, or, The Childrens Crusade: A Duty-Dance with Death',
      author: 'Kurt Vonnegut',
      category: 'Satire',
      chapter: 'Chapter 5',
      percentage: 37,
    },
    {
      id: 'dVxxLqeVbc0lA4ULXhkOn',
      title: 'Moby Dick',
      author: 'Herman Melville',
      category: 'Epic',
      chapter: 'Chapter 3',
      percentage: 24,
    },
    {
      id: 'dVxxLqI4ueuoOcRkmd1cP',
      title: 'The Banquet',
      author: 'Plato',
      category: 'Philosophy',
      chapter: 'Chapter 1',
      percentage: 12,
    },
  ],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { addBook, removeBook } = books.actions;
export default books.reducer;
