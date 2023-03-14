const exerciseOptions = {
  method: 'GET',
  headers: {
    Authorization: process.env.REACT_APP_WGER_API_KEY,
  },
};

const nutritionOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
  },
};

const fitnessOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  },
};

const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/search',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Something went wrong with the url :(');
    const data = await response.json();
    if (!Object.entries(data).length) throw new Error('No data found');
    return data;
  } catch (error) {
    console.error(error);
  }
}

const fetchExercises = async () => {
  try {
    const exercisesArr = await fetchData(
      'https://wger.de/api/v2/exerciseinfo/?limit=500',
      exerciseOptions
    );
    const results = exercisesArr?.results;

    if (!results) return [];

    const searchedExercises = results
      .filter(
        ({ language, description, images, category }) =>
          language.id === 2 &&
          description &&
          (images?.length > 0 ||
            category.name === 'Calves' ||
            category.name === 'Cardio')
      )
      .map((exercise) => ({
        ...exercise,
        description: exercise.description
          .replaceAll('<p>', '')
          .replaceAll('</p>', '')
          .replaceAll('<ul>', '')
          .replaceAll('</ul>', '')
          .replaceAll('<li>', '')
          .replaceAll('</li>', '')
          .replaceAll('<ol>', '')
          .replaceAll('</ol>', ''),
      }));

    return searchedExercises;
  } catch (error) {
    console.error(error);
  }
};

const getFoodMacros = async (food) => {
  let foodMacros = [];
  try {
    if (food)
      foodMacros = await fetchData(
        `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${food}`,
        nutritionOptions
      );
    if (!foodMacros.length) throw new Error('No macros for this food found :(');

    return foodMacros;
  } catch (error) {
    console.error(error);
  }
};

const getNeededCalories = async (params) => {
  const {
    SelectGender: gender,
    ageInput: age,
    heightInput: height,
    weightInput: weight,
    SelectActivity: activityLevel,
    SelectGoal: goal,
  } = params;

  let calories = [];
  try {
    if (params) {
      calories = await fetchData(
        `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=level_${activityLevel}`,
        fitnessOptions
      );
    }

    if (!Object.entries(calories).length)
      throw new Error('No calories found :(');

    const bmrCalories = calories?.data?.BMR;
    const goalResults =
      goal === 'maintain'
        ? calories?.data?.goals[`${goal} weight`]
        : calories?.data?.goals[goal]?.calory;

    return [bmrCalories, goalResults];
  } catch (error) {
    console.error(error);
  }
};

const getMacros = async (params) => {
  const {
    SelectGender: gender,
    ageInput: age,
    heightInput: height,
    weightInput: weight,
    SelectActivity: activityLevel,
    SelectGoal: goal,
    SelectDiet: diet,
  } = params;

  let adaptedGoal;
  // Fix bad naming between different endpoints of the API
  switch (goal) {
    case 'Mild weight loss':
      adaptedGoal = 'mildlose';
      break;
    case 'Weight loss':
      adaptedGoal = 'weightlose';
      break;
    case 'Extreme weight loss':
      adaptedGoal = 'extremelose';
      break;
    case 'Mild weight gain':
      adaptedGoal = 'mildgain';
      break;
    case 'Weight gain':
      adaptedGoal = 'weightgain';
      break;
    case 'Extreme weight gain':
      adaptedGoal = 'extremegain';
      break;
    default:
      adaptedGoal = 'maintain';
  }
  try {
    const fetchedMacros = await fetchData(
      `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}&goal=${adaptedGoal}`,
      fitnessOptions
    );

    if (!Object.entries(fetchedMacros).length)
      throw new Error('No macros found');

    // match different macro name for comming from a different APIs
    const macrosArr = Object.entries(fetchedMacros.data?.[diet]);
    macrosArr[2][0] = 'carbohydrates';
    const finalMacros = Object.fromEntries(macrosArr);

    return finalMacros;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchData,
  exerciseOptions,
  fetchExercises,
  youtubeOptions,
  getFoodMacros,
  getNeededCalories,
  getMacros,
};
