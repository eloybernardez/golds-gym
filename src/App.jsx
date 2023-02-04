import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExcerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
