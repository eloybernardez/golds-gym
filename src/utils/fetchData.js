const exerciseOptions = {
  method: 'GET',
  headers: {
    Authorization: process.env.REACT_APP_WGER_API_KEY,
  },
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const fetchExercises = async () => {
  const { results } = await fetchData(
    'https://wger.de/api/v2/exerciseinfo/?limit=500',
    exerciseOptions
  );
  const searchedExercises = results.filter(
    ({ language, description }) =>
      language.id === 2 &&
      description
  ).map((exercise) => ({
    ...exercise,
    description: exercise.description
      .replaceAll('<p>', '')
      .replaceAll('</p>', '')
      .replaceAll('<ul>', '')
      .replaceAll('</ul>', '')
      .replaceAll('<li>', '')
      .replaceAll('</li>', ''),
  }));

  return searchedExercises;
};

export { fetchData, exerciseOptions, fetchExercises };
