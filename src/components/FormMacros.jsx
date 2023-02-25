import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Select,
  Box,
  Button,
  InputLabel,
  Typography,
  Grid,
  FormControl,
} from '@mui/material';
import { MdFilter1 } from 'react-icons/md';
import ConfirmSnackbar from './ConfirmSnackbar';
import { selectInputs, textInputs } from '../utils/formInputs'



function FormMacros({ formData, setFormData, defaultValues }) {
  const [open, setOpen] = useState(false);


  const {
    handleSubmit,
    control,
  } = useForm({ defaultValues: { ...defaultValues } });


  const onSubmit = (data) => {
    setFormData(data);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      mx='auto'
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        backgroundColor: '#fffff6',
        boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.7)',
        borderRadius: '6px',
        p: '16px',
        width: { lg: '700px', xs: '320px' },
        alignItems: 'center'
      }}
    >
      <Typography
        variant='h4'
        sx={{
          mb: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <MdFilter1
          color='#ff2625'
          size='30px'
          style={{ marginRight: '12px' }}
        />
        Complete the form
      </Typography>

      <Grid container spacing={2} >
        {textInputs.map((input) =>
          <Grid item xs={12} lg={6} key={input.name} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  label={`${input.name.slice(0, 1).toUpperCase()}${input.name.slice(1)}`}
                  error={!isValid && invalid}
                  helperText={
                    !isValid && invalid
                      ? `${error?.message}`
                      : input.errorMsg
                  }

                />
              )}
            /></Grid>
        )}

        {selectInputs.map((select) =>
          <Grid item xs={12} lg={6} key={select.name} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Controller
              name={`Select${select.name.slice(0, 1).toUpperCase()}${select.name.slice(1)}`}
              control={control}
              defaultValue={select.defaultValue}
              render={({ field: { onChange, value, onBlur } }) => (
                <FormControl sx={{ width: '300px' }}>
                  <InputLabel id={`${select.gender}-select`}>{select.label.slice(0, 1).toUpperCase()}{select.label.slice(1)}</InputLabel>
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
          </Grid>)}
      </Grid>

      <Button
        variant='contained'
        type='submit'
        sx={{
          display: 'flex',
          m: '20px auto 0 auto',
          width: { lg: '300px', xs: '100%' },
          backgroundColor: '#ff2625',
          '&:hover': { backgroundColor: '#ff1010' },
        }}
        onClick={handleClick}
      >
        Submit
      </Button>
      {formData ? (
        <ConfirmSnackbar open={open} setOpen={setOpen} />) : null}
    </Box>
  );
}

export default FormMacros;
