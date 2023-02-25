import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import FoodCard from './FoodCard';
import NoFood from './NoFood';
import MacrosCounter from './MacrosCounter';

function FoodList({ foodItems, formData }) {
  const [savedFood, setSavedFood] = useState([]);

  return (
    <Box>
      <Stack
        spacing={{ xs: 2, lg: 4 }}
        direction='row'
        sx={{ flexWrap: 'wrap' }}
        justifyContent='space-evenly'
        alignItems='center'
      >
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
      {savedFood.length > 0 ? <MacrosCounter savedFood={savedFood} formData={formData} /> : null}
    </Box>
  );
}

export default FoodList;
