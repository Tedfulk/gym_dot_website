import { Box } from '@mui/material'
import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import ExercisesComponent from '../components/ExercisesComponent'

function Exercises() {
    const [bodyPart, setBodyPart] = useState('all');
    // const [exercises, setExercises] = useState([]);
    return (
        <Box>
            <SearchExercises 
            // setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyParts={setBodyPart}/>
            <ExercisesComponent 
            // setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyParts={setBodyPart}/>
        </Box>
    )
    }

export default Exercises