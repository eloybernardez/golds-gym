// eslint-disable-next-line max-classes-per-file
import React from 'react';
import { MenuItem } from '@mui/material'

class Input {
  constructor(name, rules, placeholder, errorMsg) {
    this.name = name;
    this.rules = rules;
    this.placeholder = placeholder;
    this.errorMsg = errorMsg;
  }
}

class Select {
  constructor(name, label, defaultValue, items) {
    this.name = name;
    this.label = label;
    this.defaultValue = defaultValue;
    this.items = items;
  }
}

const textInputs = [new Input('height',
  {
    required: true,
    maxLength: { value: 3, message: 'Max length is 3' },
    minLength: { value: 2, message: 'Min length is 2' },
    max: { value: 230, message: 'Max height is 230 cm' },
    min: { value: 90, message: 'Min height is 90 cm' },
  },
  'Insert Height (cm)',
  'Valid height: 90-213 cm'),

new Input('weight',
  {
    required: true,
    maxLength: { value: 3, message: 'Max length is 3' },
    minLength: { value: 2, message: 'Min length is 2' },
    max: { value: 200, message: 'Max weight is 200 kg' },
    min: { value: 20, message: 'Min height is 20 kg' },
  },
  'Insert Weight (Kg)',
  'Valid weight: 20-200 Kg'),

new Input('age', {
  required: true,
  maxLength: { value: 2, message: 'Max length is 2' },
  max: { value: 99, message: 'Max age is 99' },
  min: { value: 15, message: 'Min age is 15' },
},
  'Insert Age',
  'Valid ages:15-99')]

const selectInputs = [
  new Select('gender', 'Birth Gender', 'female', [
    <MenuItem value='male'>Male</MenuItem>,
    <MenuItem value='female'>Female</MenuItem>]),

  new Select('activity', 'Activity Level', '2', [
    <MenuItem value='1'>Sedentary: little or no exercise</MenuItem>,
    <MenuItem value='2'>Exercise 1-3 times/week</MenuItem>,
    <MenuItem value='3'>Exercise 4-5 times/week</MenuItem>,
    <MenuItem value='4'>Daily exercise</MenuItem>,
    <MenuItem value='5'>Intense exercise 6-7 times/week</MenuItem>,
    <MenuItem value='6'>Very intense exercise daily</MenuItem>]),

  new Select('diet', 'Diet', 'balanced',
    [
      <MenuItem value='balanced'>Balanced Diet</MenuItem>,
      <MenuItem value='lowfat'>Low Fat Diet</MenuItem>,
      <MenuItem value='lowcarbs'>Low Carbs Diet</MenuItem>,
      <MenuItem value='highprotein'>High Protein Diet</MenuItem>]),

  new Select('goal', 'Goal', 'maintain',
    [
      <MenuItem value='maintain'>Maintain Weight</MenuItem>,
      <MenuItem value='Mild weight loss'>Mild Weight Loss</MenuItem>,
      <MenuItem value='Weight loss'>Weight Loss</MenuItem>,
      <MenuItem value='Extreme weight loss'>Extreme Weight Loss</MenuItem>,
      <MenuItem value='Mild weight gain'>Mild Weight Gain</MenuItem>,
      <MenuItem value='Weight gain'>Weight Gain</MenuItem>,
      <MenuItem value='Extreme weight gain'>Extreme Weight Gain</MenuItem>])
]



export { selectInputs, textInputs }