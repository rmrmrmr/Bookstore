import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import Book from './Book';
import { getBooks } from '../redux/books/apiConnect';

export default function List() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <section className="flex h-[70%] mx-16 px-4 flex-wrap gap-y-1 py-4 font-serif overflow-auto">
      {
        books.length ? books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
            id={book.id}
            key={book.id}
            percentage={book.percentage}
          />
        )) : <div className="flex">Books Not Found</div>
      }
    </section>
  );
}
