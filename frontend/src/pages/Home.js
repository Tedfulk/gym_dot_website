import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { Box, Typography, Button, Rating } from '@mui/material'
import Squatting from '../assets/images/tom-squatting.jpeg'
import Mandy from '../assets/images/mandy.png'
import Sierra from '../assets/images/sierra.jpg'
import John from '../assets/images/John-Dill.jpg'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import Carousel from '../components/Carousel'






function Home() {
  return (
    <Box>
        <HeroBanner />
           {/* Welcome to the Gym */}
        <Box sx={{ display: 'flex', bgcolor: '#405378', color: 'white' }}>
          <Box>
            <Typography variant="h3" align="left" sx={{ mt: 25, mb: 3, ml: 5, fontWeight: '700' }}>
              Welcome to our Gym 
            </Typography>
            <Typography sx={{ width: '35rem', mb: 5, ml: 5 }}>
              Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are. Luckily, you don’t need to do it yourself as various personal trainers, or professional fitness coaches provide the help you need. And joining fitness classes is just at your fingertips.
            </Typography>
            <Box sx={{ 
            color: 'black',
            display: 'flex', 
            justifyContent: 'center', 
            textAlign: 'center' }}>
          <Button href="Contact" variant="outlined" size="medium" color='warning' sx={{ fontFamily: 'sans-serif', color: '#FFBD00',border: '2px solid #FFBD00' }}>SIGN UP NOW</Button>
        </Box>
          </Box>
            <img src={Squatting} alt='Male squatting weight' loading='lazy' style={{ marginTop: '5rem', marginBottom: '5rem' }}/>
        </Box>
          {/* Why workout here? */}
        <Box sx={{ bgcolor: 'white', color: '#405378' }}> 
          <Typography variant="h3" sx={{ textAlign: 'center', m: 5, fontWeight: '700' }}>
            Why workout here?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 7, mb: 10, textAlign: 'center' }}>
            <Box>
                <BoltOutlinedIcon sx={{ fontSize: 55, mb: 1 }} />
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Boost Your Fitness
                </Typography>
                <Typography sx={{ maxWidth: 300 }}>
                  Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
            <Box>
                <SpaOutlinedIcon sx={{ fontSize: 55, mb: 1  }}/>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Mindful Training
                </Typography>
                <Typography sx={{ maxWidth: 300 }}>
                  Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
            <Box>
                <FitnessCenterOutlinedIcon sx={{ fontSize: 55, mb: 1  }}/>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Strength & Conditioning
                </Typography>
                <Typography sx={{ maxWidth: 300 }}>
                  Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
          </Box>
        </Box>
          {/* Testimonials */}
        <Box sx={{ bgcolor: '#405378', pt: 5 }}> 
          <Typography variant='h3' sx={{ mb: 5, color: 'white', textAlign: 'center', fontWeight: '700' }}>
            Testimonials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 7, mt: 5, mb: 5, pb: 5, color: 'white', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Box>
                <Rating name="read-only" value={5} readOnly sx={{ fontSize: '1rem', marginBottom: 1, }} />
                <Typography sx={{ maxWidth: 300 }}>
                  Great group of coaches and athletes with the one thing in common… They strive to be better every day.
                </Typography>
              </Box>
              <Box>
                <img src={John} alt='John Dill' style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
                <Typography sx={{ fontSize: '1rem' }} >
                  John Dill
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Box>
                <Rating name="read-only" value={5} readOnly sx={{ fontSize: '1rem', marginBottom: 1 }} />
                <Typography sx={{ maxWidth: 300 }}>
                  All the coaches are knowledgeable and have a great attitude around fitness. I felt at home the first time I stepped in the gym. There's an awesome sense of community from the athletes and the coaches.
                </Typography>
              </Box>
              <Box>
                <img src={Mandy} alt='Mandy Toshiko' style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
                <Typography sx={{ fontSize: '1rem', }} >
                  Mandy Toshiko
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Box>
                <Rating name="read-only" value={5} readOnly sx={{ fontSize: '1rem', marginBottom: 1 }} />
                <Typography sx={{ maxWidth: 300 }}>
                  Good competitive atmosphere for strong athletes yet friendly enough for a beginner who is learning the ropes.
                </Typography>
              </Box>
              <Box>
                  <img src={Sierra} alt='Sierra Tjelmeland' style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
                  <Typography sx={{ fontSize: '1rem' }} >
                    Sierra Tjelmeland
                  </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Carousel */}
        <Box sx={{ pb: 5 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, fontWeight: '700' }}>
            Image Gallery
          </Typography>
          <Carousel />
        </Box>
        {/* General Stats */}
        <Box sx={{ bgcolor: '#405378', color: 'white', display: 'flex', justifyContent: 'space-evenly', pt: 10, pb: 10, textAlign: 'center' }}>
          <Box>
            <Typography variant='h3' sx={{ fontWeight: 600 }}>
              200+
            </Typography>
            <Typography variant='h5'>
              Members
            </Typography>
            </Box>
          <Box>
            <Typography variant='h3' sx={{ fontWeight: 600 }}>
              5
            </Typography>
            <Typography variant='h5'>
              Class Options
            </Typography>
            </Box>
          <Box>
            <Typography variant='h3' sx={{ fontWeight: 600 }}>
              10+
            </Typography>
            <Typography variant='h5'>
              Years Experience
            </Typography>
            </Box>
        </Box>
    </Box>
    )
}

export default Home