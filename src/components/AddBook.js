import React from 'react';
import { useDispatch } from 'react-redux';
import createBook from '../redux/books/createBook';
import { addBooksThunk } from '../redux/books/apiConnect';

export default function Form() {
  const dispatch = useDispatch();

  const newBook = async (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBooksThunk(createBook(title, author)));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <section className="h-1/6 flex flex-wrap mx-20 content-center gap-y-1 border-t-2 pt-1 border-slate-300">
      <h2 className="text-lg w-full text-slate-500 font-bold">ADD A NEW BOOK</h2>
      <form className="w-full flex items-center gap-4" onSubmit={newBook}>
        <input
          type="text"
          name="title"
          id="titleInput"
          placeholder="Book Title"
          className="w-4/6 border-2 py-1 px-2"
        />
        <input
          type="text"
          name="author"
          id="authotInput"
          placeholder="Author"
          className="w-1/6 border-2 py-1 px-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-10 py-2 text-sm w-1/6"
        >
          Add Book
        </button>
      </form>
    </section>
  );
}
