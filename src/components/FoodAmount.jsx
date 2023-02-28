import React from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'

function FoodAmount({ servingSize, setServingSize, handleSavedFood }) {
  return (
    <Stack sx={{ mt: '50px' }}>
      <Typography sx={{ fontWeight: 'bold' }}>Serving Size (G)</Typography>
      <TextField
        value={servingSize}
        placeholder='Modify serving size (G)'
        onChange={(e) =>
          setServingSize(
            Number(e.target.value) >= 0
              ? Number(e.target.value)
              : servingSize
          )
        }
      />
      <Button
        onClick={handleSavedFood}
        variant='contained'
        sx={{
          mt: '20px',
          backgroundColor: '#ff2625',
          '&:hover': { backgroundColor: '#ff1010' },
        }}
      >
        Add Food
      </Button>
    </Stack>
  )
}

export default FoodAmount