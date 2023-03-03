import React from 'react'
import { Box, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h4' mb={2} mt={2}>Exercises with similar <span style={{ color: '#ff2625' }}>muscle group</span></Typography>
      <Box >
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} isBodyPart={false} /> : <Loader />}
      </Box>

      <Typography variant='h4' mb={2} mt={2}>Exercises with similar <span style={{ color: '#ff2625' }}>equipment</span></Typography>
      <Box>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} isBodyPart={false} /> : <Loader />}
      </Box>
    </Box>
  )
}

export default SimilarExercises;