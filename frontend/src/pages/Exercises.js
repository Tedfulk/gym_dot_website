import { Box } from '@mui/material'
import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import ExercisesComponent from '../components/ExercisesComponent'

function Exercises() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <SearchExercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyParts={setBodyPart}
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