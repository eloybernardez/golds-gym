import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Loader from '../components/Loader'

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
      {exercises ? <Exercises
        exercises={exercises}
        setExercises={setExercises}
        chosenBodyPart={chosenBodyPart}
      /> : <Loader />}
    </Box>
  );
}

export default Home;
