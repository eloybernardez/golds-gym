import React, { useState, useEffect } from 'react';
import { Stack, Typography, Chip } from '@mui/material';
import { MdFilter3 } from 'react-icons/md';
import useMacros from '../hooks/useMacros';
import sumUserMacros from '../utils/sumUserMacros';
import MacrosCard from './MacrosCard';
import Loader from './Loader';
import ModalCompletedMacros from './ModalCompletedMacros';

function MacrosCounter({ savedFood, formData }) {
  const macros = useMacros(formData);
  const [userMacros, setUserMacros] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (
      macros.calories &&
      userMacros.every((macro) => macro[1] >= Math.floor(macros[macro[0]]))
    ) {
      setOpenModal(true);
    }
  }, [userMacros]);

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
      <ModalCompletedMacros
        open={openModal}
        setOpen={setOpenModal}
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
        <MdFilter3
          color='#ff2625'
          size='30px'
        />
        These are your consumed macros
      </Typography>

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
              fontWeight={600}
              sx={{ color: '#ff2625' }}
            >
              {macro[0].slice(0, 1).toUpperCase()}
              {macro[0].slice(1)}
              {macro[1] >= Math.floor(macros[macro[0]]) ? (
                <Chip
                  label='Completed'
                  color='primary'
                  size='small'
                  sx={{ ml: '10px' }}
                />
              ) : null}
            </Typography>

            <Typography variant='body2'>Recommended for you:</Typography>

            <Typography
              fontWeight={600}
              variant='h5'
              sx={{
                fontSize: '3rem',
                mb: '12px',
              }}
            >
              {macros[macro[0]] ? Math.floor(macros[macro[0]]) : <Loader />}{' '}
              {index !== 0 ? 'g' : 'kcal'}
            </Typography>

            <Typography variant='body2'>You have consumed:</Typography>

            <Typography
              variant='h5'
              sx={{
                color:
                  macro[1] >= Math.floor(macros[macro[0]])
                    ? '#ff2625'
                    : '#000000',
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
