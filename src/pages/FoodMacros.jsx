import React, { useState } from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';
import FoodSearch from '../components/FoodSearch';
import FormMacros from '../components/FormMacros';
import FoodList from '../components/FoodList';
import LoadInfo from '../assets/images/macro-insert.jpg';
import RecommendedMacros from '../components/RecommendedMacros';
import Loader from '../components/Loader';
import ConsumedMacros from '../components/ConsumedMacros';
import FoodCard from '../components/FoodCard'



function FoodMacros() {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [savedFood, setSavedFood] = useState([])
  const foodCardParams = { setSavedFood, savedFood, foodItems, setFoodItems }

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: '35px',
        mx: 'auto',
      }}

    >
      <Stack
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='h2'
          sx={{ color: '#ff2625', mb: '10px', textAlign: 'center' }}
        >
          Food Macros
        </Typography>
        <Typography
          variant='h6'
          sx={{ mb: '30px', px: { xs: '30px' }, textAlign: 'center' }}
        >
          Because we all know that exercising is not enough...
        </Typography>


        <Stack spacing={2} direction={{ lg: 'row', xs: 'column' }} justifyContent='center' alignItems='center' mb='55px'  >

          <Container sx={{ display: { lg: 'block', xs: 'none' }, width: '600px' }}>
            <img src={LoadInfo} alt='by Vlada Karpovich' style={{ borderRadius: '12px', width: '500px', height: '400px', clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 94%)' }} />
          </Container>

          <FormMacros
            formData={formData}
            setFormData={setFormData}
          />
        </Stack>

        {Object.keys(formData).length ?
          <Stack
            justifyContent='center'
            alignItems='center'>

            <RecommendedMacros formData={formData} />

            <FoodSearch
              foodItems={foodItems}
              setFoodItems={setFoodItems}
            />

            <FoodList
              foodItems={foodItems}
              renderCard={(item) => (
                <Stack
                  direction={{ lg: 'row', xs: 'column' }}
                  gap={3}
                  p={2}
                  key={item[0]?.[1]}
                >
                  <FoodCard
                    params={{ ...foodCardParams, item }}
                  />
                </Stack>
              )}
            />

            <ConsumedMacros savedFood={savedFood} formData={formData} />

          </Stack> :
          <Stack direction='column' alignItems='center' >
            <Typography variant='body2' sx={{ textAlign: 'center' }}>Waiting for your data...</Typography>
            <Loader />
          </Stack>
        }
      </Stack>
    </Box >
  );
}

export default FoodMacros;
