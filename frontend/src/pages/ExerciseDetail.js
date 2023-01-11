import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimlairExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'


const ExerciseDetail = () =>  {
  const [ exerciseDetail, setExerciseDetail ] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams()

  useEffect (() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }
      fetchExerciseData();
    }, [id]);

    if (!exerciseDetail) {
      return <h1>No Data</h1>
    }

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <SearchExercises />
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimlairExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail