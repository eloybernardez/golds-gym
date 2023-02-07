import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { fetchExercises } from '../utils/fetchData';

function Exercises({ exercises, setExercises, chosenBodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const chosenMuscle = chosenBodyPart.name?.toLowerCase();
    const fetchExercisesData = async (muscle) => {
      const fetchedExercises = await fetchExercises();

      const filteredByMuscle = fetchedExercises.filter(({ category }) =>
      category?.name && category.name.toLowerCase() === muscle);
      setExercises(filteredByMuscle);
    };
    fetchExercisesData(chosenMuscle);
  }, [chosenBodyPart]);

  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography
        variant='h3'
        mb='46px'
      >
        Showing results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </Stack>
      <Stack
        mt='100px'
        alignItems='center'
      >
        {exercises.length >= 8 && (
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
