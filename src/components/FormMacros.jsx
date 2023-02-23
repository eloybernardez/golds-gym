import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Select,
  MenuItem,
  Box,
  Button,
  InputLabel,
  Typography,
} from '@mui/material';
import { MdFilter1 } from 'react-icons/md';
import ConfirmSnackbar from './ConfirmSnackbar';

const defaultValues = {
  SelectGender: 'female',
  SelectActivity: '1',
  SelectGoal: 'maintain weight',
  SelectDiet: 'balanced',
  ageInput: 25,
  heightInput: 150,
  weightInput: 55,
};

function FormMacros({ formData, setFormData }) {
  const [open, setOpen] = useState(false);
  
  const {
    handleSubmit,
    control,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { ...defaultValues } });

  useEffect(() => {
    if (isSubmitSuccessful) reset({ ...defaultValues });
  }, [formState, reset]);

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
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        backgroundColor: '#fffff6',
        boxShadow: '-1px 0px 9px 1px rgba(0,0,0,0.49)',
        borderRadius: '10px',
        p: '16px',
        mb: '35px',
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

      <Controller
        name='heightInput'
        control={control}
        rules={{
          required: true,
          maxLength: { value: 3, message: 'Max length is 3' },
          minLength: { value: 2, message: 'Min length is 2' },
          max: { value: 230, message: 'Max height is 230 cm' },
          min: { value: 90, message: 'Min height is 90 cm' },
        }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { invalid, error, isValid },
        }) => (
          <TextField
            value={value}
            onBlur={onBlur}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder='Insert Height (cm)'
            label='Height'
            error={!isValid && invalid}
            helperText={
              !isValid && invalid
                ? `${error?.message}`
                : `Valid height: 90-213 cm`
            }
            sx={{ mr: '20px' }}
          />
        )}
      />
      <Controller
        name='weightInput'
        control={control}
        rules={{
          required: true,
          maxLength: { value: 3, message: 'Max length is 3' },
          minLength: { value: 2, message: 'Min length is 2' },
          max: { value: 200, message: 'Max weight is 200 kg' },
          min: { value: 20, message: 'Min height is 20 kg' },
        }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { invalid, error, isValid },
        }) => (
          <TextField
            value={value}
            onBlur={onBlur}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder='Insert Weight (kg)'
            label='Weight'
            error={!isValid && invalid}
            helperText={
              !isValid && invalid
                ? `${error?.message}`
                : `Valid weight: 20-200 kg`
            }
          />
        )}
      />

      <Controller
        name='SelectGender'
        control={control}
        defaultValue='female'
        render={({ field: { onChange, value, onBlur } }) => (
          <div>
            <InputLabel id='gender-select'>Birth Gender</InputLabel>
            <Select
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              label='SelectGender'
              labelId='gender-select'
              id='gender-select'
              sx={{ mb: '20px', mr: '20px' }}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </div>
        )}
      />

      <Controller
        name='SelectActivity'
        control={control}
        rules={{ required: true }}
        defaultValue='2'
        render={({ field: { onChange, value, onBlur } }) => (
          <div>
            <InputLabel id='activity-select'>Activity Level</InputLabel>
            <Select
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label='Activity Level'
              labelId='activity-select'
              id='activity-select'
              sx={{ mb: '20px', mr: '20px' }}
            >
              <MenuItem value='1'>Sedentary: little or no exercise</MenuItem>
              <MenuItem value='2'>Exercise 1-3 times/week</MenuItem>
              <MenuItem value='3'>Exercise 4-5 times/week</MenuItem>
              <MenuItem value='4'>Daily exercise or intense exercise 3-4 times/week</MenuItem>
              <MenuItem value='5'>Intense exercise 6-7 times/week</MenuItem>
              <MenuItem value='6'>Very intense exercise daily, or physical job</MenuItem>
            </Select>
          </div>
        )}
      />

      <Controller
        name='SelectDiet'
        control={control}
        rules={{ required: true }}
        defaultValue='balanced'
        render={({ field: { onChange, value, onBlur } }) => (
          <div>
            <InputLabel id='diet-select'>Diet</InputLabel>
            <Select
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label='Diet Level'
              labelId='diet-select'
              id='diet-select'
              sx={{ mb: '20px', mr: '20px' }}
            >
              <MenuItem value='balanced'>Balanced Diet</MenuItem>
              <MenuItem value='lowfat'>Low Fat Diet</MenuItem>
              <MenuItem value='lowcarbs'>Low Carbs Diet</MenuItem>
              <MenuItem value='highprotein'>High Protein Diet</MenuItem>
            </Select>
          </div>
        )}
      />

      <Controller
        name='SelectGoal'
        control={control}
        rules={{ required: true }}
        defaultValue='maintain weight'
        render={({ field: { onChange, value, onBlur } }) => (
          <div>
            <InputLabel id='goal-select'>Goal</InputLabel>
            <Select
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label='Goal'
              labelId='goal-select'
              id='goal-select'
              sx={{ mb: '20px', mr: '20px' }}
            >
              <MenuItem value='maintain weight'>Maintain Weight</MenuItem>
              <MenuItem value='Mild weight loss'>Mild Weight Loss</MenuItem>
              <MenuItem value='Weight loss'>Weight Loss</MenuItem>
              <MenuItem value='Extreme weight loss'>Extreme Weight Loss</MenuItem>
              <MenuItem value='Mild weight gain'>Mild Weight Gain</MenuItem>
              <MenuItem value='Weight gain'>Weight Gain</MenuItem>
              <MenuItem value='Extreme weight gain'>Extreme Weight Gain</MenuItem>
            </Select>
          </div>
        )}
      />

      <Controller
        name='ageInput'
        control={control}
        rules={{
          required: true,
          maxLength: { value: 2, message: 'Max length is 2' },
          max: { value: 99, message: 'Max age is 99' },
          min: { value: 15, message: 'Min age is 15' },
        }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { invalid, error, isValid },
        }) => (
          <TextField
            value={value}
            onBlur={onBlur}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder='Insert Age'
            label='Age'
            error={!isValid && invalid}
            helperText={
              !isValid && invalid ? `${error?.message}` : `Valid ages:15-99`
            }
          />
        )}
      />

      <Button
        variant='contained'
        type='submit'
        sx={{
          display: 'block',
          mt: '20px',
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
