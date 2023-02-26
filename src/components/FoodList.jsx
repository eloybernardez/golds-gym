import React, { useState } from 'react';
import { Stack, Box, Container } from '@mui/material';
import FoodCard from './FoodCard';
import NoFood from './NoFood';
import MacrosCounter from './MacrosCounter';
import Macros from '../assets/images/macros-2.jpg';

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

      {savedFood.length > 0 ?
        <Stack spacing={2} direction={{ lg: 'row', xs: 'column' }} justifyContent='center' alignItems='center' mt='35px'  >
          <MacrosCounter savedFood={savedFood} formData={formData} />

          <Container sx={{ display: { lg: 'flex', xs: 'none' }, width: '600px', justifyContent: 'center' }}>
            <img src={Macros} alt='by Eiliv Aceron at Unsplash' style={{ borderRadius: '12px', width: '300px', height: '400px', clipPath: 'polygon(0 8%, 100% 3%, 100% 100%, 0 100%)' }} />
          </Container>

        </Stack> : null}
    </Box>
  );
}

export default FoodList;
