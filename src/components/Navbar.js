import React from "react";
import { Link } from 'react-router-dom';
import { RiUser5Line } from 'react-icons/ri';

export default function Books() {
  return (
    <header className="flex gap-20 items-center w-screen h-1/6 px-20">
      <h1 className="text-blue-600 text-3xl font-bold">Bookstore CMS</h1>
      <nav className="flex text-md w-auto gap-10">
        <Link to="/">B O O K S</Link>
        <Link to="/categories">C A T E G O R I E S</Link>
      </nav>
      <span className="ml-auto"><RiUser5Line className="h-1/6 w-10 text-blue-600" /></span>
    </header>
  )
}