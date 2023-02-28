import React, { useState } from 'react';
import { Typography, Stack, Button, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import ConfirmSnackbar from './ConfirmSnackbar';
import FoodAmount from './FoodAmount';

function FoodCard({ params }) {
  const { setSavedFood, savedFood, foodItems, setFoodItems, item
  } = params;
  const [servingSize, setServingSize] = useState(100);
  const [open, setOpen] = useState(false);

  const handleSavedFood = () => {
    let updatedItems = savedFood;
    // update food macros
    const updatedFood = item.map((macro, index) =>
      index !== 0
        ? [macro[0], Math.floor((macro[1] * servingSize) / 100)]
        : [macro[0], macro[1]]
    );
    // Find repeated item, if exists
    const repeatedIndex = savedFood.findIndex(
      (food) => food[0]?.[1] === updatedFood[0]?.[1]
    );
    // If it does exists, filter it from the array
    if (repeatedIndex !== -1) {
      updatedItems = savedFood.filter((_, index) => index !== repeatedIndex);
    }

    setOpen(true);
    // Update savedFood
    setSavedFood([...updatedItems, updatedFood]);
  };

  const eliminateFood = (food) => {
    const foodToEliminate = foodItems.find((f) => f[0]?.[1] === food[0]?.[1])
    if (foodToEliminate !== -1) {
      const updatedItems = foodItems.filter((f) => f !== foodToEliminate)
      const updatedSavedItems = savedFood.filter((f) => f[0]?.[1] !== foodToEliminate[0]?.[1])

      setFoodItems([...updatedItems])
      setSavedFood([...updatedSavedItems])
    }
  }

  return (
    <>
      <Card sx={{ width: '300px' }}>
        <CardContent sx={{ textTransform: 'capitalize' }}>
          <Stack direction='row' sx={{ display: 'flex', mb: '8px' }} justifyContent='space-between' alignItems='center'><Typography
            variant='h4'
            color='#ff2625'
          >
            {item[0]?.[1]}
          </Typography>
            <Button onClick={() => eliminateFood(item)} variant='text'>
              <CloseIcon />
            </Button>
          </Stack>


          {item.map((food, index) =>
            index !== 0 ? (
              <div key={`food-${food[0]}`}>
                <Stack
                  direction='row'
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}

                >
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      fontWeight: 'bold',
                    }}
                  >
                    {food[0]}
                  </Typography>

                  <Typography sx={{ textTransform: 'capitalize' }}>
                    {servingSize !== 100
                      ? Math.floor((food[1] * servingSize) / 100)
                      : food[1]}
                  </Typography>

                </Stack>
                <Divider sx={{ mb: '5px', mt: '5px' }} />
              </div>
            ) : null
          )}

          <FoodAmount servingSize={servingSize} setServingSize={setServingSize} handleSavedFood={handleSavedFood} />
        </CardContent>
      </Card>

      <ConfirmSnackbar open={open} setOpen={setOpen} isCorrect message={`${item[0]?.[1].slice(0, 1).toUpperCase()}${item[0]?.[1].slice(1)} confirmed`} />
    </>
  );
}

export default FoodCard;
