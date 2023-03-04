import React from 'react';
import { Stack, Box } from '@mui/material';
import NoFood from './NoFood';

function FoodList({ foodItems, renderCard }) {
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
          foodItems.map((item) => renderCard(item))
        ) : (
          <NoFood />
        )}
      </Stack>
    </Box>
  );
}

export default FoodList;
