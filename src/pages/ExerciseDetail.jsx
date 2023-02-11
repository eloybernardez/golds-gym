import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchExercises, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

function ExerciseDetail() {
  const [ exercisesDetail, setExercisesDetail ] = useState({});
  const { id } = useParams();
  console.log("asd", id);
  useEffect(() => {
    const getExerciseDetail = async () => {
    const exerciseInfo = await fetchExercises();
    const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';
    // const exerciseVideo = await fetchData(youtubeSearchUrl, exerciseOptions);
    
    const exerciseDetailData = exerciseInfo.find((exercise) => exercise.exercise_base_id === id);
    console.log(exerciseDetailData);
    setExercisesDetail(exerciseDetailData);
    };
    
    getExerciseDetail();
    
  },[id]);

  return (
    <Box>
      <Detail exercisesDetail={ exercisesDetail } />
      <ExerciseVideos />
      <SimilarExercises />
      <p>asd</p>
    </Box>
  );
}

export default ExerciseDetail;
