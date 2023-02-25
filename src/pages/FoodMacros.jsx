/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';
import FoodSearch from '../components/FoodSearch';
import FormMacros from '../components/FormMacros';
import FoodList from '../components/FoodList';
import LoadInfo from '../assets/images/macro-insert.jpg'

const defaultValues = {
  SelectGender: 'female',
  SelectActivity: '1',
  SelectGoal: 'maintain',
  SelectDiet: 'balanced',
  ageInput: 25,
  heightInput: 160,
  weightInput: 70,
};

function FoodMacros() {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState(defaultValues);

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: '35px',
        mx: 'auto',
        width: { lg: '1300px', xs: '400px' },
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

        <Stack spacing={2} direction={{ lg: 'row', xs: 'column' }} justifyContent='center' alignItems='center' mb='35px'  >
          <Container sx={{ display: { lg: 'block', xs: 'none' }, width: '600px' }}>
            <img src={LoadInfo} alt='by Vlada Karpovich' style={{ borderRadius: '12px', width: '500px', height: '400px', clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 94%)' }} />
          </Container>
          <FormMacros
            formData={formData}
            setFormData={setFormData}
            defaultValues={defaultValues}
          />
        </Stack>

        <FoodSearch
          foodItems={foodItems}
          setFoodItems={setFoodItems}
        />
        <FoodList
          foodItems={foodItems}
          formData={formData}
        />
      </Stack>
    </Box >
  );
}

export default FoodMacros;
