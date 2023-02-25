import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, SportsGymnastics } from '@mui/icons-material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  const [value, setValue] = useState(0);
  return (
    <Stack
      direction='row'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
      {window.innerWidth > 600 ?
        <Stack
          sx={{ gap: '40px', fontSize: '24px', alignItems: 'flex-end' }}
          direction='row'
        >
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: '#3A1212',
              borderBottom: '3px solid #ff2625',
            }}
          >
            Home
          </Link>
          <a
            href='#exercises'
            style={{ textDecoration: 'none', color: '#3A1212' }}
          >
            Exercises
          </a>
          <Link
            to='/macros'
            style={{
              textDecoration: 'none',
              color: '#3A1212',
            }}
          >
            Macros
          </Link>
        </Stack> :
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', zIndex: '2' }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label='Home' icon={<Home />} component={Link} to='/' />
            <BottomNavigationAction label='Exercises' icon={<SportsGymnastics />} component={Link} to='#exercises' />
            <BottomNavigationAction label='Macros' icon={<LocalPizzaIcon />} component={Link} to='/macros' />
          </BottomNavigation>
        </Paper>
      }
    </Stack >
  );
}

export default Navbar;
