import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt: { lg: '100px', xs: '0'}}}>
      <Typography variant='h4' mb={2} mt={2}>Exercises with similar <span style={{ color:'#ff2625' }}>muscle group</span></Typography>
      <Stack direction='row' sx={{ p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>

      <Typography variant='h4' mb={2} mt={2}>Exercises with similar <span style={{ color:'#ff2625' }}>equipment</span></Typography>
      <Stack direction='row' sx={{ p:'2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises;