/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import { getFoodMacros } from '../utils/fetchData';

function FoodMacros() {
  const [foodSearch, setFoodSearch] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  const handleFood = async () => {
    const fetchedFood = await getFoodMacros(foodSearch);
    const foodEntries = fetchedFood.map((food) => Object.entries(food));
    const formattedMacros = foodEntries[0].map((food, index) => {
      if (index >= 2) {
        return [food[0].split('_').join(' '), food[1]];
      }
      return food;
    });

    setFoodSearch('');
    if (formattedMacros) setFoodItems([formattedMacros, ...foodItems]);
  };

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: '35px',
        width: { lg: '1300px', xs: '100%' },
      }}
    >
      <Stack
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='h2'
          sx={{ color: '#ff2625', mb: '30px' }}
        >
          Food Macros
        </Typography>
        <SearchBar
          search={foodSearch}
          setSearch={setFoodSearch}
          handleSearch={handleFood}
          isAFoodSearch
        />
      </Stack>
      <Stack
        spacing={{ xs: 2, lg: 4 }}
        direction='row'
        sx={{ flexWrap: 'wrap' }}
        justifyContent='space-evenly'
      >
        {foodItems.length > 0
          ? foodItems.map((item) => (
              <Stack
                direction={{ lg: 'row', xs: 'column' }}
                gap={3}
                p={2}
              >
                <FoodCard item={item} />
              </Stack>
            ))
          : null}
      </Stack>
    </Box>
  );
}

export default FoodMacros;
