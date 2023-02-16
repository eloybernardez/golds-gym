/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { getFoodMacros } from '../utils/fetchData';

const foodMacros = [
  'Calories',
  'Protein',
  'Carbs',
  'Fat',
  'Fiber',
  'Sugar',
  'Sodium',
  'Potassium',
  'Cholesterol',
]


function FoodMacros() {
  const [foodSearch, setFoodSearch] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  const handleFood = async () => {
    const food = await getFoodMacros(foodSearch);
    const macros = food.map((macro) => Object.entries(macro))
    console.log(macros);

    setFoodSearch('');
    if (macros) setFoodItems(macros);
  }

  return (
    <Box sx={{ p: '20px' }}>
      <Typography variant='h2' sx={{ color: '#ff2625', mb: '10px' }}>Food Macros</Typography>
      <SearchBar search={foodSearch} setSearch={setFoodSearch} handleSearch={handleFood} />
      
        <Stack spacing={{ xs: 2, lg: 4 }} direction={{ xs: 'column', lg: 'row' }} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
          {foodItems.map((item) => 
          item.map((macro) =>(<Typography sx={{textTransform: 'capitalize'}} >{macro[0]}: {macro[1]}</Typography>)))}
        </Stack>
        
    </Box>
  )
}

export default FoodMacros