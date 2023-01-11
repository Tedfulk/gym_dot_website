import React from 'react'
import { Box, Typography, Button, Card, CardCover, CardContent } from '@mui/joy'
import Grip from '../assets/images/snatch-grip.jpeg'

function SignUpNow() {
    return (
    <Card sx={{ "--Card-radius": "0px"}}>
        <CardCover> 
            <img
            src={Grip}
            srcSet={Grip}
            alt="Snatch Grip"
            loading="lazy"
            />
        </CardCover>
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10, pb: 10}}>
                <Box sx={{ bgcolor: 'white', pl: 5, pr: 5}}>

                <Typography sx={{ fontSize: { lg: '34px', xs: '30px' }, fontFamily: 'sans-serif', fontWeight: '700', color: 'black', display: 'flex', justifyContent: 'center', textAlign: 'center' }} mb="39px" mt="40px">
                Get an introductory 
                <br/>
                lesson for free!
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'cneter', bgcolor: 'black' }}>
                <Button component="a" href="Contact" size='md' variant='outlined' color='warning' sx={{ fontFamily: 'sans-serif', color: '#FFBD00', borderRadius: '0px', ml: 17, mr: 17, mt: 7, mb: 7 }}>Sign Up Now</Button>
                </Box>
            </Box>
        </CardContent>
        </Card>
    )
}

export default SignUpNow