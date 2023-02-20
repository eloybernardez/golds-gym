/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import NoFood from '../components/NoFood';
import MacrosCounter from '../components/MacrosCounter';
import { getFoodMacros } from '../utils/fetchData';
import FormMacros from '../components/FormMacros';

function FoodMacros() {
  const [foodSearch, setFoodSearch] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [savedFood, setSavedFood] = useState([]);
  const [error, setError] = useState(false);

  const handleFood = async () => {
    const fetchedFood = await getFoodMacros(foodSearch);
    if (!fetchedFood.length > 0) {
      setError(true);
      return;
    }
    // Format food's keys to be use
    const foodEntries = fetchedFood.map((food) => Object.entries(food));
    const formattedMacros = foodEntries[0].map((food, index) => {
      if (index >= 1) {
        return [food[0].split('_').join(' '), food[1]];
      }
      return food;
    });

    // Update error and search
    setError(false);
    setFoodSearch('');

    if (formattedMacros) {
      setFoodItems([...foodItems, formattedMacros]);
    }
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
          sx={{ color: '#ff2625', mb: '10px' }}
        >
          Food Macros
        </Typography>
        <Typography
          variant='h6'
          sx={{ mb: '30px', px: { xs: '30px' } }}
        >
          Because we all know that exercising is not enough...
        </Typography>
        <SearchBar
          search={foodSearch}
          setSearch={setFoodSearch}
          handleSearch={handleFood}
          isAFoodSearch
        />
        {error ? (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            May be a food in Jupiter but not in Earth!
          </Alert>
        ) : null}
      </Stack>
      <Stack
        spacing={{ xs: 2, lg: 4 }}
        direction='row'
        sx={{ flexWrap: 'wrap' }}
        justifyContent='space-evenly'
      >
        <FormMacros />
        {/* <MacrosCounter savedFood={savedFood} /> */}
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <Stack
              direction={{ lg: 'row', xs: 'column' }}
              gap={3}
              p={2}
              key={item[0]?.[1]}
            >
              <FoodCard
                item={item}
                setSavedFood={setSavedFood}
                savedFood={savedFood}
              />
            </Stack>
          ))
        ) : (
          <NoFood />
        )}
      </Stack>
    </Box>
  );
}

export default FoodMacros;
