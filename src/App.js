import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}/>
      </Routes>
    </Router>
  );
}
