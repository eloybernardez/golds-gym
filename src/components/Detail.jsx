import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import NotFound from '../assets/images/no-exercise.jpg';

function Detail({ exerciseDetail }) {
  const { name, description, category, equipment, images } = exerciseDetail;
  return (
    <Stack gap='16px' sx={{ flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img
        src={images[0]?.image || NotFound}
        alt={name}
        loading='lazy'
        style={{ width: '250px', height: '250px', margin: '12px auto 0 auto' }}
      />
      <Stack sx={{ gap:{ lg: '35px', xs: '20px'} }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{name}</Typography>
        <Typography>Exercises keep you strong. {name} {` `}
        {description}</Typography>
        <Stack direction='row' gap='16px'>
          asd
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Detail;