import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
    <Box mt={{ lg: '212px', xs: '70px' }} ml={{ sm: '50px' }} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700" fontSize={{ lg: '44px', xs: '40px' }} mb="23px" mt="30px">
        Sweat, Smile
        <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}
      >
        Explore exercises
      </Button>
      <Typography
        fontSize="200px"
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Hero Banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
