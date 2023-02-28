import React from 'react'
import { Stack, Container } from '@mui/material'
import MacrosCounter from './MacrosCounter'
import Macros from '../assets/images/macros-2.jpg';

function ConsumedMacros({ savedFood, formData }) {
  return (
    savedFood.length > 0 ?
      <Stack spacing={2} direction={{ lg: 'row', xs: 'column' }} justifyContent='center' alignItems='center' mt='35px'  >
        <MacrosCounter savedFood={savedFood} formData={formData} />

        <Container sx={{ display: { lg: 'flex', xs: 'none' }, width: '600px', justifyContent: 'center' }}>
          <img src={Macros} alt='by Eiliv Aceron at Unsplash' style={{ borderRadius: '12px', width: '300px', height: '400px', clipPath: 'polygon(0 8%, 100% 3%, 100% 100%, 0 100%)' }} />
        </Container>

      </Stack> : null
  )
}

export default ConsumedMacros