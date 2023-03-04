import React from 'react';
import { Stack } from '@mui/material';

function ConsumedMacros({ children }) {
  return (
    <Stack
      spacing={2}
      direction={{ lg: 'row', xs: 'column' }}
      justifyContent='center'
      alignItems='center'
      mt='35px'
    >
      {children}
    </Stack>
  );
}

export default ConsumedMacros;
