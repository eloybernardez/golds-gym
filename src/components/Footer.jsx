import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return <Box mt='80px' bgcolor='#fff3f4' mb={{
    xs: '25px', lg: '0'
  }}>
    <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src={Logo} alt='logo' width='200px' />
      <Typography variant='h5' pb='40px' mt='40px'>Made with ❤ by <a href='https://eloydev.vercel.app/' style={{ textDecoration: 'none', color: '#ff2625' }}>eloy dev</a></Typography>
    </Stack>
  </Box >
}

export default Footer;
