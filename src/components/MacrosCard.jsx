import React from 'react';
import { Card, CardContent } from '@mui/material';

function MacrosCard({ children }) {
  return (
    <Card
      variant='outlined'
      sx={{
        width: '300px',
        mx: '8px',
        textAlign: 'center',
        mb: '10px',
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default MacrosCard;
