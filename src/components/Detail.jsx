import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import NotFound from '../assets/images/no-exercise.jpg';

function Detail({ exerciseDetail }) {
  const { name, description, category, equipment, images } =
    exerciseDetail;
  const extraDetail = [
    {
      icon: TargetImage,
      name: category?.name,
    },
    {
      icon: EquipmentImage,
      name: equipment?.name || 'No Equipment',
    },
  ];
  return (
    <Stack
      gap='16px'
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img
        src={images ? images[0].image : NotFound}
        alt={name}
        loading='lazy'
        style={{ width: '250px', height: '250px', margin: '12px auto 0 auto' }}
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: 'bold', color: '#ff2a2a' }}
        >
          {name}
        </Typography>
        <Typography variant='h6'>{description}</Typography>
        {extraDetail.map((item) => (
          <Stack
            direction='row'
            gap='24px'
            alignItems='center'
            key={`${item.name} logo`}
          >
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography
              variant='h6'
              textTransform='capitalize'
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
