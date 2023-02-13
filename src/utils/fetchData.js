import { AssignmentReturnedSharp } from "@mui/icons-material";

const exerciseOptions = {
  method: 'GET',
  headers: {
    Authorization: process.env.REACT_APP_WGER_API_KEY,
  },
};

const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/search',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  try {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
  } catch (error) {
   return console.error(error.message);
  }
};

const fetchExercises = async () => {
  const { results } = await fetchData(
    'https://wger.de/api/v2/exerciseinfo/?limit=500',
    exerciseOptions
  );
  const searchedExercises = results
    .filter(({ language, description,images }) => language.id === 2 && description && images.length>0)
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
};

export { fetchData, exerciseOptions, fetchExercises, youtubeOptions };
