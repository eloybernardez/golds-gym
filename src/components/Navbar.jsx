import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Container,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState([true, false, false]);

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
      <Container
        sx={{
          display: { lg: 'flex', xs: 'none' },
          width: '48px',
          height: '48px',
          margin: '0 20px',
          alignItems: 'center',
        }}
      >
        <Link to='/'>
          <img
            src={Logo}
            alt='logo'
            style={{ height: '48px' }}
          />
        </Link>
      </Container>

      <Stack
        sx={{
          gap: '40px',
          fontSize: '24px',
          alignItems: 'flex-end',
          display: { lg: 'flex', xs: 'none' },
        }}
        direction='row'
      >
        <Link
          to='/'
          className={isActive[0] ? 'link--active' : ''}
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
          onClick={() => setIsActive([!isActive[0], false, false])}
        >
          Home
        </Link>
        <a
          href='#exercises'
          className={isActive[1] ? 'link--active' : ''}
          style={{ textDecoration: 'none', color: '#3A1212' }}
          onClick={() => setIsActive([false, !isActive[1], false])}
        >
          Exercises
        </a>
        <Link
          to='/macros'
          className={isActive[2] ? 'link--active' : ''}
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
          onClick={() => setIsActive([false, false, !isActive[2]])}
        >
          Macros
        </Link>
      </Stack>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          zIndex: '2',
          display: { lg: 'none', xs: 'block' },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Home'
            icon={<Home />}
            component={Link}
            to='/'
            onClick={() => window.scrollTo(0, 0)}
          />
          <BottomNavigationAction
            label='Macros'
            icon={<LocalPizzaIcon />}
            component={Link}
            to='/macros'
            onClick={() => window.scrollTo(0, 0)}
          />
        </BottomNavigation>
      </Paper>
    </Stack>
  );
}

export default Navbar;
