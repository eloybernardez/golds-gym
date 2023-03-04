import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography, Grid } from '@mui/material';
import { MdFilter1 } from 'react-icons/md';
import ConfirmSnackbar from './ConfirmSnackbar';
import { selectInputs, textInputs } from '../utils/formInputs';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const defaultValues = {
  SelectGender: 'female',
  SelectActivity: '1',
  SelectGoal: 'maintain',
  SelectDiet: 'balanced',
  ageInput: 25,
  heightInput: 160,
  weightInput: 70,
};

function FormMacros({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: { ...defaultValues },
  });

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
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.7)',
        borderRadius: '6px',
        p: '16px',
        width: { lg: '700px', xs: '320px' },
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h5'
        sx={{
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

      <Typography
        variant='body1'
        sx={{ textAlign: 'center', mt: '8px' }}
      >
        Fill the form with the requested data. It is important to show your{' '}
        <b>recommended macros</b>
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mt: '15px' }}
      >
        {textInputs.map((input) => (
          <FormInput
            input={input}
            control={control}
          />
        ))}

        {selectInputs.map((select) => (
          <FormSelect
            select={select}
            control={control}
          />
        ))}
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
        <ConfirmSnackbar
          open={open}
          setOpen={setOpen}
          isCorrect
          message='Your data was saved!'
        />
      ) : null}
    </Box>
  );
}

export default FormMacros;
