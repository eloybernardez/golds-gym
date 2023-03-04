import React from 'react';
import { Grid, FormControl, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

function FormSelect({ select, control }) {
  return (
    <Grid
      item
      xs={12}
      lg={6}
      key={select.name}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Controller
        name={`Select${select.name
          .slice(0, 1)
          .toUpperCase()}${select.name.slice(1)}`}
        control={control}
        defaultValue={select.defaultValue}
        render={({ field: { onChange, value, onBlur } }) => (
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id={`${select.gender}-select`}>
              {select.label.slice(0, 1).toUpperCase()}
              {select.label.slice(1)}
            </InputLabel>
            <Select
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              label={`Select${select.name}`}
              labelId={`${select.gender}-select`}
              id={`${select.gender}-select`}
            >
              {select.items.map((menuItem) => menuItem)}
            </Select>
          </FormControl>
        )}
      />
    </Grid>
  );
}

export default FormSelect;
