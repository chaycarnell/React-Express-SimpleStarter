import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

const Render = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="*" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default Render;
