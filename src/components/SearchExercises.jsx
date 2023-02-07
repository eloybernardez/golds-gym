import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import Abs from '../assets/icons/abs.png';
import Arms from '../assets/icons/arms.png';
import Back from '../assets/icons/back.png';
import Chest from '../assets/icons/chest.png';
import Legs from '../assets/icons/legs.png';
import Calves from '../assets/icons/calves.png';
import Cardio from '../assets/icons/cardio.png';
import Shoulder from '../assets/icons/shoulder.png';

function SearchExercises({ setExercises, chosenBodyPart, setChosenBodyPart }) {
  const muscleImgs = [Abs, Arms, Back, Chest, Legs, Calves, Cardio, Shoulder];
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
          image: musclesImgs[index],
      }));
      setBodyParts(muscles);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const { results } = await fetchData(
        'https://wger.de/api/v2/exerciseinfo/?limit=500',
        exerciseOptions
      );
      const searchedExercises = results
        .filter(
          ({ name, language, description, muscles }) =>
            language.id === 2 &&
            description &&
            (name.toLowerCase().includes(search) ||
              muscles[0]?.name_en.toLowerCase().includes(search))
        )
        .map((exercise) => ({
          ...exercise,
          description: exercise.description
            .replaceAll('<p>', '')
            .replaceAll('</p>', '')
            .replaceAll('<ul>', '')
            .replaceAll('</ul>', '')
            .replaceAll('<li>', '')
            .replaceAll('</li>', ''),
        }));

      setSearch('');
      setExercises(searchedExercises);
    }
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
      <Box
        position='relative'
        mb='72px'
      >
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
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
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
