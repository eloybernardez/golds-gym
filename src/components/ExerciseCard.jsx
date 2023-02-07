import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import NotFound from '../assets/images/no-exercise.jpg';

function ExerciseCard({ exercise }) {
  return (
    <Link
      className='exercise-card'
      to={`/exercise/${exercise.exercise_base_id}`}
    >
      <img
        src={exercise.images[0]?.image || NotFound}
        alt={exercise.name}
        loading='lazy'
        style={{ width: '250px', height: '250px', margin: '12px auto 0 auto' }}
      />
      <Stack
        direction='column'
        gap='8px'
        mt='8px'
        px='8px'
      >
        <Stack direction='row'>
          {exercise.muscles?.map((muscle) =>
            muscle ? (
              <Typography
                key={muscle.id}
                sx={{
                  ml: '10px',
                  p: '4px 8px',
                  color: '#fff',
                  background: '#ffa9a9',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
                }}
              >
                {muscle.name_en}
              </Typography>
            ) : null
          )}
          {exercise.equipment?.map((equip) => (
            <Typography
              key={equip.id}
              sx={{
                ml: '21px',
                p: '4px 8px',
                color: '#fff',
                background: '#fcc757',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize',
              }}
            >
              {equip.name}
            </Typography>
          ))}
        </Stack>
        <Typography
          ml='21px'
          color='#000'
          fontWeight='bold'
          fontSize='22px'
          mt='11px'
          pb='10px'
          textTransform='capitalize'
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  );
}

export default ExerciseCard;
