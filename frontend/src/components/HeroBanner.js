import React from 'react'
import {Box, Typography} from '@mui/material'

function HeroBanner() {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, 
    ml: { sm: '50px' } }} 
    position="relative" p="20px">
        <Typography color= '#FFFFF'>
            Fitness Club
        </Typography>
    </Box>
  )
}

export default HeroBanner