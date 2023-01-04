import * as React from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import '@fontsource/public-sans';
import HeroBannerImage from '../assets/images/handstands.png';


function HeroBanner() {
  return (
    <Box>
      <Card sx={{ minWidth: 300, mt: 1, flexGrow: 1, "--Card-padding": "0px", "--Card-radius": "0px" }}>
        <CardCover>
          <img
            src={HeroBannerImage}
            srcSet={HeroBannerImage}
            loading="lazy"
            alt="Banner"
          />
        </CardCover>
        <CardContent>
          <Typography sx={{ fontSize: { lg: '44px', xs: '40px' }, fontFamily: 'sans-serif', fontWeight: '700', color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center' }} mb="39px" mt="40px">
        A Cutting-edge 
        <br />
        Fitness Gym
            </Typography>
            <Typography fontSize="16px" fontFamily='sans-serif' lineHeight="39px" sx={{
                    color: 'white', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    textAlign: 'center' }}>
              We offer an unpretentious and results-oriented community 
              <br/>
              that is invested in your goals and success. 
              <br/>
              <br/>
            </Typography>
        </CardContent>
        <Box sx={{
            color: 'black', 
            display: 'flex', 
            justifyContent: 'center', 
            textAlign: 'center' }}>
          <Button component="a" href="Groups" size='md' variant='outlined' color='warning' sx={{ fontFamily: 'sans-serif', color: '#FFBD00', m: 4 }}>FIND A TRAINING GROUP</Button>
        </Box>
      </Card>
        
    </Box>
  )
}

export default HeroBanner