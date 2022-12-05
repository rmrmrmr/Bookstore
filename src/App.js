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
      </Routes>
    </Router>
  );
}
