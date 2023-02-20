import React from 'react';
import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Typography, Box, Stack } from '@mui/material';

function NoFood() {
  return (
    <Box
      justifyContent='center'
      alignItems='center'
      display='flex'
      sx={{
        width: { lg: '750px', xs: '250px' },
        borderRadius: '12px',
        flexDirection: { lg: 'row', xs: 'column' },
      }}
    >
      <NoFoodIcon
        sx={{ fontSize: '200px', color: '#ff3330', opacity: '0.5' }}
      />
      <Stack
        direction='row'
        sx={{ mt: '20px' }}
      >
        <Typography
          variant='h5'
          sx={{ color: '#555', opacity: '0.5' }}
        >
          You have not added food! Eat something{' '}
          <LunchDiningIcon sx={{ fontSize: '25px', color: '#ff3330' }} />
        </Typography>
      </Stack>
    </Box>
  );
}

export default NoFood;
