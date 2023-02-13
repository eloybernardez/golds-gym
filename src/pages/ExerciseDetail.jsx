import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchExercises, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises] = useState([]);
  const [equipmentExercises,setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getExerciseDetail = async () => {
      const exerciseInfo = await fetchExercises();
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

      
      const exerciseDetailData = exerciseInfo.find(
        (exercise) => exercise.exercise_base_id === Number(id)
        );
        
        setExerciseDetail(exerciseDetailData);

        const {contents} = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}&type=v`,
          youtubeOptions
        );
      if (contents)  setExerciseVideos(contents);

      const targetMuscleExercisesData = exerciseInfo.filter((exercise) => exercise.category?.name === exerciseDetailData.category?.name);
      const equipmentExercisesData = exerciseInfo.filter((exercise) => exercise.equipment?.id === exerciseDetailData.equipment?.id);

      if (targetMuscleExercisesData) setTargetMuscleExercises(targetMuscleExercisesData);
      if (equipmentExercisesData) setEquipmentExercises(equipmentExercisesData);
    };

    getExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
}

export default ExerciseDetail;
