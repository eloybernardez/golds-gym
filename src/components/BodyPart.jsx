import React from 'react';
import { Stack, Typography } from '@mui/material';

function BodyPart({ item, chosenBodyPart, setChosenBodyPart }) {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      m='0 10px'
      className='bodyPart-card'
      sx={{
        borderTop: chosenBodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setChosenBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={item.muscle?.image}
        alt={item.name}
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {item.name}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
