import React, { useState } from 'react';
import { TextField, Typography, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function FoodCard({ item }) {
  const [servingSize, setServingSize] = useState(100);
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
          index > 2 ? (
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
                {servingSize !== 100 ? (food[1] * servingSize) / 100 : food[1]}
              </Typography>
            </Stack>
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
        </Stack>
      </CardContent>
    </Card>
  );
}

export default FoodCard;
