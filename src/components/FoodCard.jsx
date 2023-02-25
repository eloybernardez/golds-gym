import React, { useState } from 'react';
import { TextField, Typography, Stack, Button, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function FoodCard({ item, setSavedFood, savedFood }) {
  const [servingSize, setServingSize] = useState(100);

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

    // Update savedFood
    setSavedFood([...updatedItems, updatedFood]);
  };
  return (
    <Card sx={{ width: '300px' }}>
      <CardContent sx={{ textTransform: 'capitalize' }}>
        <Typography
          variant='h4'
          color='#ff2625'
        >
          {item[0]?.[1]}
        </Typography>
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
        <Stack sx={{ mt: '50px' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Serving Size (G)</Typography>
          <TextField
            value={servingSize}
            placeholder='Modify serving size (G)'
            onChange={(e) =>
              setServingSize(
                Number(e.target.value) >= 0
                  ? Number(e.target.value)
                  : servingSize
              )
            }
          />
          <Button
            onClick={handleSavedFood}
            variant='contained'
            sx={{
              mt: '20px',
              backgroundColor: '#ff2625',
              '&:hover': { backgroundColor: '#ff1010' },
            }}
          >
            Add Food
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default FoodCard;
