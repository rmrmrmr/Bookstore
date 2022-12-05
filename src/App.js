import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import List from './components/List';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <div className="h-screen">
              <Navbar />
              <List />
              <AddBook />
            </div>
)}
        />
        <Route
          path="/categories"
          element={(
            <div className="h-screen flex flex-wrap justify-center">
              <Navbar />
              <input type="button" value="Check Status" className="bg-blue-500 text-white px-10 py-2 text-sm w-1/6 h-9" />
            </div>
)}
        />
      </Routes>
    </Router>
  );
}
