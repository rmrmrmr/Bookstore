import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = {
  books: bookReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer,
});

export default store;
