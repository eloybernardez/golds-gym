import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FoodMacros from './pages/FoodMacros';
import './App.css';

function App() {
  const gymTheme = createTheme({
    palette: {
      primary: { main: '#ff2625' },
      secondary: { main: '#3A1212' },
    },
  });
  return (
    <Box
      width='400px'
      sx={{ width: { xl: '1488px' } }}
      m='auto'
    >
      <ThemeProvider theme={gymTheme}>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/exercise/:id'
            element={<ExerciseDetail />}
          />
          <Route
            path='/macros'
            element={<FoodMacros />}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
