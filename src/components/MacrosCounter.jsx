import React, { useEffect, useState } from 'react';
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
import sumUserMacros from '../utils/sumUserMacros';
import { getMacros, getNeededCalories } from '../utils/fetchData';

function MacrosCounter({ savedFood, formData }) {
  const [maxCalories, setMaxCalories] = useState(0);
  const [macros, setMacros] = useState([]);

  const userMacros = sumUserMacros(savedFood);

  useEffect(() => {
    async function receiveMaxCalories() {
      const userMaxCalories = await getNeededCalories(formData);
      if (userMaxCalories[1]) setMaxCalories(userMaxCalories[1].calory);
    }

    async function receiveMacros () {
      const idealUserMacros = await getMacros(formData);
      if (idealUserMacros) setMacros(idealUserMacros)
    }

    receiveMaxCalories();
    receiveMacros();

  
  }, [formData]);

  return (
    <Stack
      gap={3}
      sx={{ mt: '30px' }}
      
    >
      <Typography
        variant='h4'
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
        sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent:'space-evenly'}}
      >
        {userMacros.map((macro, index) => (
          <ListItem key={`macro-${macro[0]}`}>
            <ListItemAvatar>
              <Avatar>
               {index === 0 && (macro[1] >= Math.floor(maxCalories)) || macro[1] >= Math.floor(macros[macro[0]]) ? <CheckIcon style={{color:'#50c32e'}} /> : <LocalFireDepartmentIcon style={{ color: '#ff2625' }} /> }
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
              primary={macro[0]}
              secondary={`${macro[1]} / ${index === 0 ? Math.floor(maxCalories) : Math.floor(macros[macro[0]])}`}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default MacrosCounter;
