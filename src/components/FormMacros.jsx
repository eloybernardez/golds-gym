import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem } from '@mui/material';

const defaultValues = {
  SelectGender: 'other',
  SelectActivity: 'sedentary',
  ageInput: 25,
};

function FormMacros() {
  const [formData, setFormData] = useState(null);

  const {
    handleSubmit,
    control,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { ...defaultValues },
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset({ ...defaultValues });
  }, [formState, reset]);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='SelectGender'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value}
            label='Gender'
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Feale</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        )}
      />

      <Controller
        name='SelectActivity'
        control={control}
        rules={{ required: true }}
        defaultValue='sedentary'
        render={({ field: { onChange, value, label } }) => (
          <Select
            value={value}
            onChange={onChange}
            label='Activity Level'
          >
            <MenuItem value='sedentary'>Sedentary</MenuItem>
            <MenuItem value='light'>Light</MenuItem>
            <MenuItem value='moderate'>Moderate</MenuItem>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='extreme'>Extreme</MenuItem>
          </Select>
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
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder='Insert Age'
            label='Age'
          />
        )}
      />

      <input type='submit' />
    </form>
  );
}

export default FormMacros;
