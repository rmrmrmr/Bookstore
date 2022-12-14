import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function List() {
  const books = useSelector((state) => state.books.books);

  return (
    <section className="flex h-[70%] mx-16 px-4 flex-wrap gap-y-1 py-4 overflow-auto font-serif">
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
