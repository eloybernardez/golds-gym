import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { MdFilter3 } from 'react-icons/md';
import { lightGreen } from '@mui/material/colors';
import useMacros from '../hooks/useMacros';
import sumUserMacros from '../utils/sumUserMacros';
import MacrosCard from './MacrosCard';
import Loader from './Loader';

function MacrosCounter({ savedFood, formData }) {
  const macros = useMacros(formData);
  const [userMacros, setUserMacros] = useState([]);

  useEffect(() => {
    const consumedMacros = sumUserMacros(savedFood);
    if (consumedMacros.length) setUserMacros(consumedMacros);
  }, [savedFood]);

  return (
    <Stack
      gap={3}
      sx={{ mt: '30px' }}
      alignItems='center'
    >
      <Stack
        direction='row'
        gap={1}
        alignItems='center'
      >
        <MdFilter3
          color='#ff2625'
          size='30px'
        />
        <Typography
          variant='h5'
          px={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          These are the macros you have consumed today
        </Typography>
      </Stack>

      <Stack
        sx={{
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          justifyContent: 'space-evenly',
        }}
      >
        {userMacros.map((macro, index) => (
          <MacrosCard key={`cardMacro-${macro[0]}`}>
            <Typography
              variant='h5'
              component='div'
            >
              {macro[0].slice(0, 1).toUpperCase()}
              {macro[0].slice(1)}
            </Typography>

            <Typography variant='body2'>Recommended for you:</Typography>

            <Typography
              sx={{
                color:
                  macro[1] >= Math.floor(macros[macro[0]])
                    ? lightGreen[500]
                    : '#ff2625',
                fontWeight: 'bold',
                fontSize: '3rem',
                mb: '12px',
              }}
            >
              {macros[macro[0]] ? Math.floor(macros[macro[0]]) : <Loader />}{' '}
              {index !== 0 ? 'g' : 'kcal'}
            </Typography>

            <Typography variant='body2'>You have consumed:</Typography>

            <Typography
              sx={{
                color:
                  macro[1] >= Math.floor(macros[macro[0]])
                    ? lightGreen[500]
                    : '#ff2625',
                fontWeight: 'bold',
                fontSize: '3rem',
              }}
            >
              {macro[1]} {index !== 0 ? 'g' : 'kcal'}
            </Typography>
          </MacrosCard>
        ))}
      </Stack>
    </Stack>
  );
}

export default MacrosCounter;
