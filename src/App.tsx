import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from 'components/Templates/PageLayout/PageLayout';
import AuthProvider from 'Auth/AuthProvider';
import Homepage from 'components/pages/Homepage/Homepage';
import LoginRegister from 'components/atoms/LoginRegister/LoginRegister';

function App() {
  return (
   <AuthProvider>
  <BrowserRouter  basename='/foo-rum'>
  <Routes>
    <Route path="/" element={<PageLayout children={<Homepage />} />} />
    <Route path="/login-register" element={<PageLayout children={<LoginRegister />} />} />
  </Routes>
  </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
