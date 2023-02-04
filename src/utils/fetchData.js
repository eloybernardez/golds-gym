export const exerciseOptions = {
  method: 'GET',
  headers: { 'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY },
  contentType: 'application/json',
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
