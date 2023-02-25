import React, { useEffect, useState } from 'react';
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar, ListItemText,
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MdFilter3 } from 'react-icons/md';
import CheckIcon from '@mui/icons-material/Check';
import Loader from './Loader'
import sumUserMacros from '../utils/sumUserMacros';
import { getMacros, getNeededCalories } from '../utils/fetchData';

function MacrosCounter({ savedFood, formData }) {
  const [maxCalories, setMaxCalories] = useState(0);
  const [macros, setMacros] = useState([]);

  const userMacros = sumUserMacros(savedFood);

  useEffect(() => {
    async function receiveMaxCalories() {
      const userMaxCalories = await getNeededCalories(formData);

      if (userMaxCalories[1]) setMaxCalories(Math.floor(userMaxCalories[1]));
    }
    receiveMaxCalories();

    async function receiveMacros() {
      const idealUserMacros = await getMacros(formData);

      idealUserMacros.calories = maxCalories;

      if (idealUserMacros) setMacros(idealUserMacros)
    }

    receiveMacros();


  }, [formData, maxCalories]);

  return (
    <Stack
      gap={3}
      sx={{ mt: '30px' }}
      alignItems='center'

    >
      <Typography
        variant='h5'
        px={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MdFilter3
          color='#ff2625'
          size='30px'
          style={{ marginRight: '12px' }}
        />{' '}
        Here are your Macros
      </Typography>

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
                secondary={<Typography variant='p'>{macro[1]} / {Math.floor(macros[macro[0]])}</Typography>}
              />
            </ListItem>)
            : <Loader />
        )}
      </List>
    </Stack>
  );
}

export default MacrosCounter;
