/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FoodSearch from '../components/FoodSearch';
import FormMacros from '../components/FormMacros';
import FoodList from '../components/FoodList';

function FoodMacros() {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState(null);

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: '35px',
        mx:'auto',
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

        <FormMacros
          formData={formData}
          setFormData={setFormData}
        />
        <FoodSearch
          foodItems={foodItems}
          setFoodItems={setFoodItems}
        />
        <FoodList
          foodItems={foodItems}
          formData={formData}
        />
      </Stack>
    </Box>
  );
}

export default FoodMacros;
