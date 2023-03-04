import React from 'react';
import NoFoodIcon from '@mui/icons-material/NoFood';
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
        alignItems='center'
        sx={{ mt: '20px' }}
      >
        <Typography
          variant='h5'
          sx={{ color: '#555', opacity: '0.5', textAlign: 'center' }}
        >
          {`You haven't eaten anything! Eat something`}
        </Typography>
      </Stack>
    </Box>
  );
}

export default NoFood;
