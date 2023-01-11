import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import ExercisesComponent from '../components/ExercisesComponent'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <SearchExercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            />
            <ExercisesComponent 
            setExercises={setExercises} 
            exercises={exercises}
            bodyPart={bodyPart} 
            />
        </Box>
    )
    }

export default Exercises