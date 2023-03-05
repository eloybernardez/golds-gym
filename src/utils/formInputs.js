// eslint-disable-next-line max-classes-per-file
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

const textInputs = [
  new Input(
    'height',
    {
      required: true,
      maxLength: { value: 3, message: 'Max length is 3' },
      minLength: { value: 2, message: 'Min length is 2' },
      max: { value: 230, message: 'Max height is 230 cm' },
      min: { value: 90, message: 'Min height is 90 cm' },
    },
    'Insert Height (cm)',
    'Valid height: 90-213 cm'
  ),

  new Input(
    'weight',
    {
      required: true,
      maxLength: { value: 3, message: 'Max length is 3' },
      minLength: { value: 2, message: 'Min length is 2' },
      max: { value: 200, message: 'Max weight is 200 kg' },
      min: { value: 20, message: 'Min height is 20 kg' },
    },
    'Insert Weight (Kg)',
    'Valid weight: 20-200 Kg'
  ),

  new Input(
    'age',
    {
      required: true,
      maxLength: { value: 2, message: 'Max length is 2' },
      max: { value: 99, message: 'Max age is 99' },
      min: { value: 15, message: 'Min age is 15' },
    },
    'Insert Age',
    'Valid ages:15-99'
  ),
];

const selectInputs = [
  new Select('gender', 'Birth Gender', 'female', [
    { description: 'Male', value: 'male' },
    { description: 'Female', value: 'female' },
  ]),

  new Select('activity', 'Activity Level', '2', [
    { description: 'Sedentary: little or no exercise', value: '1' },
    { description: 'Exercise 1-3 times/week', value: '2' },
    { description: 'Exercise 4-5 times/week', value: '3' },
    { description: 'Daily exercise', value: '4' },
    { description: 'Intense exercise 6-7 times/week', value: '5' },
    { description: 'Very intense exercise daily', value: '6' },
  ]),

  new Select('diet', 'Diet', 'balanced', [
    { description: 'Balanced Diet', value: 'balanced' },
    { description: 'Low Fat Diet', value: 'lowfat' },
    { description: 'Low Carbs Diet', value: 'lowcarbs' },
    { description: 'High Protein Diet', value: 'highprotein' },
  ]),

  new Select('goal', 'Goal', 'maintain', [
    { description: 'Maintain Weight', value: 'maintain' },
    { description: 'Mild Weight Loss', value: 'Mild weight loss' },
    { description: 'Weight Loss', value: 'Weight loss' },
    { description: 'Extreme Weight Loss', value: 'Extreme weight loss' },
    { description: 'Mild Weight Gain', value: 'Mild weight gain' },
    { description: 'Weight Gain', value: 'Weight gain' },
    { description: 'Extreme Weight Gain', value: 'Extreme weight gain' },
  ]),
];

export { selectInputs, textInputs };
