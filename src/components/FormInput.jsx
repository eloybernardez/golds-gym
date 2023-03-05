import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function FormInput({ input, control }) {
  return (
    <Grid
      item
      xs={12}
      lg={6}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Controller
        name={`${input.name}Input`}
        control={control}
        rules={input.rules}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { invalid, error, isValid },
        }) => (
          <TextField
            sx={{ width: '300px' }}
            value={value}
            onBlur={onBlur}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder={input.placeholder}
            label={`${input.name.slice(0, 1).toUpperCase()}${input.name.slice(
              1
            )}`}
            error={!isValid && invalid}
            helperText={
              !isValid && invalid ? `${error?.message}` : input.errorMsg
            }
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
