import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from 'components/Templates/PageLayout/PageLayout';


function App() {
  return (
   
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<PageLayout />} />
    <Route path="/login-register" element={<PageLayout />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
