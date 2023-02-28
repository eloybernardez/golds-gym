import React from 'react'
import { Box, Card, CardContent, Typography, Stack } from '@mui/material'
import useMacros from '../hooks/useMacros'


function RecommendedMacros({ formData }) {
  const macros = useMacros(formData)
  const orderMacros = Object.entries(macros) // convert object to array

  return (
    <Box sx={{ mb: '55px' }}>
      {macros ?
        <>
          <Typography variant='h5' mb={4} sx={{ textAlign: 'center' }}>Your <Typography component='span' variant='h5' sx={{ color: '#ff2625', fontWeight: 'bold' }}>daily recommended macros</Typography> are </Typography>

          <Stack direction={{ lg: 'row', xs: 'column' }} justifyContent={{ lg: 'space-evenly', xs: 'space-around' }} alignItems='center' >

            {orderMacros.map((item, index) =>

              <Card variant='outlined'
                key={`reco-macro-${item[0]}`} sx={{ width: '300px', height: '200px', mx: '8px', textAlign: 'center', mb: '10px' }}>

                <CardContent>
                  <Typography variant='h5' component='div'>
                    {item[0].slice(0, 1).toUpperCase()}{item[0].slice(1)}
                  </Typography>

                  <Typography variant='body2'>
                    Recommended for you:
                  </Typography>

                  <Typography sx={{ color: '#ff2625', fontWeight: 'bold', fontSize: '3rem', mt: '12px' }}>{Math.floor(item[1])} {index + 1 !== orderMacros.length ? 'g' : 'kcal'}</Typography>
                </CardContent>

              </Card>)}
          </Stack>
        </> : null}
    </Box>)
}


export default RecommendedMacros