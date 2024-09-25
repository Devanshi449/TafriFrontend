import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import { initializeApp } from "firebase/app";
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import AuthRoute from './AuthRoute.tsx'
import Admin from './Admin.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyBiQLIl0pbch6ujRkxsgShfXuusFPNUrm0",
  authDomain: "tafrifrontend.firebaseapp.com",
  projectId: "tafrifrontend",
  storageBucket: "tafrifrontend.appspot.com",
  messagingSenderId: "125487186559",
  appId: "1:125487186559:web:0cc7f5c9a3a2e9549ff54a"
};

initializeApp(firebaseConfig);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
</StrictMode>,
)
