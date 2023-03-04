import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { MdFilter2 } from 'react-icons/md';
import ConfirmSnackbar from './ConfirmSnackbar';
import SearchBar from './SearchBar';
import { getFoodMacros } from '../utils/fetchData';

function FoodSearch({ foodItems, setFoodItems }) {
  const [foodSearch, setFoodSearch] = useState('');
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFood = async () => {
    const fetchedFood = await getFoodMacros(foodSearch);
    const isRepeated = foodItems.find(
      (food) => fetchedFood[0]?.name === food[0]?.[1]
    );

    setOpen(true);
    if (!fetchedFood.length > 0 || isRepeated) {
      setError(true);
      return;
    }

    // Format food's keys to use
    const foodEntries = fetchedFood.map((food) => Object.entries(food));
    const formattedMacros = foodEntries[0].map((food, index) => {
      if (index >= 1) {
        return [food[0].split('_').join(' '), Number(food[1])];
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
    <>
      <Typography
        variant='h5'
        px={1}
        sx={{
          mb: '20px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <MdFilter2
          color='#ff2625'
          size='30px'
          style={{ marginRight: '12px' }}
        />{' '}
        Insert consumed food
      </Typography>

      <ConfirmSnackbar
        open={open}
        setOpen={setOpen}
        isCorrect={!error}
        message={!error ? 'Food added!' : 'Food not found or already added'}
      />

      <SearchBar
        search={foodSearch}
        setSearch={setFoodSearch}
        handleSearch={handleFood}
        isAFoodSearch
      />
    </>
  );
}

export default FoodSearch;
