import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [chosenBodyPart, setChosenBodyPart] = useState('');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        chosenBodyPart={chosenBodyPart}
        setChosenBodyPart={setChosenBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        chosenBodyPart={chosenBodyPart}
      />
    </Box>
  );
}

export default Home;
