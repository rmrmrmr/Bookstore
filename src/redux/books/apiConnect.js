import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2t8fqWZuouijX3morClV';

const createBookList = (obj) => {
  const result = [];
  const keys = Object.keys(obj);

  keys.forEach((item) => {
    result.push({
      author: obj[item][0].author,
      id: item,
      category: obj[item][0].category,
      title: obj[item][0].title,
    });
  });
  return result;
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(`${baseUrl}/books`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createBookList(data);
  },
);

export const addBooksThunk = createAsyncThunk(
  'books/addBooks',
  async (payload, thunkAPI) => {
    fetch(`${baseUrl}/books`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    thunkAPI.dispatch(getBooks());
  },
);

export const deleteBooksThunk = createAsyncThunk(
  'books/deleteBooks',
  async (payload, thunkAPI) => (
    fetch(`${baseUrl}/books/${payload}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: payload }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      thunkAPI.dispatch(getBooks());
    })
  ),
);
