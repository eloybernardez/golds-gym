import React from 'react';
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MdFilter3 } from 'react-icons/md';
import CheckIcon from '@mui/icons-material/Check';
import Loader from './Loader'
import useMacros from '../hooks/useMacros';
import sumUserMacros from '../utils/sumUserMacros';


function MacrosCounter({ savedFood, formData }) {
  const macros = useMacros(formData);

  const userMacros = sumUserMacros(savedFood);

  return (
    <Stack
      gap={3}
      sx={{ mt: '30px' }}
      alignItems='center'


    >
      <Stack direction='row' gap={1} alignItems='center'>
        <MdFilter3
          color='#ff2625'
          size='30px'
        />
        <Typography
          variant='h5'
          px={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          These are the macros you have consumed today
        </Typography>
      </Stack>

      <List
        sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'space-evenly' }}
      >
        {userMacros.map((macro) =>
          macros[macro[0]] ?
            (<ListItem key={`macro-${macro[0]}`} >
              <ListItemAvatar>

                <Avatar sx={{ backgroundColor: '#ffffff', boxShadow: '-1px 0px 9px 1px rgba(0,0,0,0.49)', }}>
                  {macro[1] >= Math.floor(macros[macro[0]]) ? <CheckIcon style={{ color: '#50c32e' }} /> : <LocalFireDepartmentIcon style={{ color: '#ff2625' }} />}
                </Avatar>

              </ListItemAvatar>

              <ListItemText
                sx={{ textTransform: 'capitalize' }}
                primary={<Typography variant='h6' sx={{ fontWeight: 'bold' }}>{macro[0]}</Typography>}
                secondary={<Typography variant='body2'>{macro[1]} / {Math.floor(macros[macro[0]])}</Typography>}
              />
            </ListItem>)
            : <Loader />
        )}
      </List>
    </Stack>
  );
}

export default MacrosCounter;
