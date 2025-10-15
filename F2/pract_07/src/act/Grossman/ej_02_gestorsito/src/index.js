import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          {}
        </Routes>
        {}
        <UserProfile />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
