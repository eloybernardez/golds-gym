import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData, fetchExercises } from '../utils/fetchData';

import Abs from '../assets/icons/abs.png';
import Arms from '../assets/icons/arms.png';
import Back from '../assets/icons/back.png';
import Chest from '../assets/icons/chest.png';
import Legs from '../assets/icons/legs.png';
import Calves from '../assets/icons/calves.png';
import Cardio from '../assets/icons/cardio.png';
import Shoulder from '../assets/icons/shoulder.png';
import SearchBar from './SearchBar';

function SearchExercises({ setExercises, chosenBodyPart, setChosenBodyPart }) {
  const muscleImgs = [Abs, Arms, Back, Calves, Cardio, Chest, Legs, Shoulder];
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const { results } = await fetchData(
        'https://wger.de/api/v2/exercisecategory/',
        exerciseOptions
      );
      const muscles = results.map((muscle, index) => ({
        ...muscle,
        image: muscleImgs[index],
      }));
      setBodyParts(muscles);

      const searchedExercises = await fetchExercises();
      setExercises(searchedExercises);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const searchedExercises = await fetchExercises();
    const filteredExercises = searchedExercises.filter(
      ({ name, muscles }) =>
        name.toLowerCase().includes(search) ||
        muscles[0]?.name_en.toLowerCase().includes(search)
    );

    setSearch('');
    setExercises(filteredExercises);
  };

  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        fontWeight={700}
        mb='50px'
        textAlign='center'
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
      >
        Awesome Exercises You
        <br />
        Should Know
      </Typography>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          chosenBodyPart={chosenBodyPart}
          setChosenBodyPart={setChosenBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
