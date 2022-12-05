import React from 'react';
import { Link } from 'react-router-dom';
import { RiUser5Line } from 'react-icons/ri';

export default function Books() {
  return (
    <header className="flex gap-20 items-center w-screen h-16 px-20 border-slate-300 bg-white border-b-2">
      <h1 className="text-blue-500 text-3xl font-bold">Bookstore CMS</h1>
      <nav className="flex text-md w-auto gap-10">
        <Link to="/">B O O K S</Link>
        <Link to="/categories">C A T E G O R I E S</Link>
      </nav>
      <span className="ml-auto"><RiUser5Line className="h-1/6 w-10 text-blue-500" /></span>
    </header>
  );
}
