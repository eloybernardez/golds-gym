import React, { memo } from 'react';
import { Box, Button, TextField } from '@mui/material';

function SearchBar({ search, setSearch, handleSearch, isAFoodSearch = false }) {
  return (
    <Box
      position='relative'
      mb='72px'
    >
      <TextField
        sx={{
          input: {
            fontWeight: 700,
            border: 'none',
            borderRadius: '4px',
          },
          width: { lg: '800px', xs: '320px' },
          backgroundColor: '#fff',
          borderRadius: '40px',
        }}
        height='76px'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
        placeholder={
          isAFoodSearch ? 'Insert Food (one by one) ' : 'Search Exercises'
        }
        type='text'
      />
      <Button
        className='search-btn'
        sx={{
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0',
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}

export default memo(SearchBar);
