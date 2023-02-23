import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { MdFilter2 } from 'react-icons/md';
import SearchBar from './SearchBar';
import { getFoodMacros } from '../utils/fetchData';

function FoodSearch({ foodItems, setFoodItems }) {
  const [foodSearch, setFoodSearch] = useState('');
  const [error, setError] = useState(false);

  const handleFood = async () => {
    const fetchedFood = await getFoodMacros(foodSearch);
    if (!fetchedFood.length > 0) {
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
        variant='h4'
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
    </>
  );
}

export default FoodSearch;
