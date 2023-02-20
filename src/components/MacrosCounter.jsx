import React from 'react';
import { Stack } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function MacrosCounter({ foodItems }) {
  return (
    <Stack direction={{ lg: 'row', xs: 'column' }}>
      <Stack>
        <LocalFireDepartmentIcon />
      </Stack>
    </Stack>
  );
}

export default MacrosCounter;
