import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Categories from './pages/Categories';
import Book from './pages/Books';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <Book />
)}
        />
        <Route
          path="/categories"
          element={(
            <Categories />
)}
        />
      </Routes>
    </Router>
  );
}
