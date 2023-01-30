import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { Box, Typography, Button, Rating, Link } from '@mui/material'
import Squatting from '../assets/images/tom-squatting.jpeg'
import Mandy from '../assets/images/mandy.png'
import Sierra from '../assets/images/sierra.jpg'
import John from '../assets/images/John-Dill.jpg'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Carousel from '../components/Carousel'
import Socials from '../components/Socials'
import Map from '../assets/images/location.png'







function Home() {
  return (
    <Box>
        <HeroBanner />
           {/* Welcome to the Gym */}
        <Box sx={{ display: 'flex',  bgcolor: '#405378', color: 'white', pt: 10, alignItems: 'center'}}>
          <Box sx={{ maxWidth: '50%',  }}>
            <Typography variant="h3" align="left" sx={{ mb: 3, ml: 5, fontWeight: '700' }}>
              Welcome to our Gym 
            </Typography>
            <Typography sx={{ mb: 5, ml: 5, mr: 5}}>
              Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are. Luckily, you don’t need to do it yourself as various personal trainers, or professional fitness coaches provide the help you need. And joining fitness classes is just at your fingertips.
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 5, mt: 5,  }}>
              <Button href="Contact" variant="outlined" size="medium" color='warning' sx={{ fontFamily: 'sans-serif', color: '#FFBD00', border: '2px solid #FFBD00', }}>SIGN UP NOW</Button>
            </Box>
          </Box>
          <Box sx={{ mr: 5, display: 'flex', alignItems: 'center' }}>
            <img src={Squatting} alt='Male squatting weight' loading='lazy' style={{ marginBottom: '5rem', maxWidth: '100%', height: 'auto' }}/>
          </Box>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 7, mt: 5, mb: 5, pb: 5, color: 'white', textAlign: 'center', pl: 2, pr: 2 }}>
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
        {/* Location */}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 10, pb: 5 }}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant='h3' sx={{ fontWeight: 600, mb: 2 }}>
              Come Visit Us
            </Typography>
            <Typography variant='h6' sx={{ maxWidth: 500 }}>
              <Link href='Groups' underline='hover' color={'#FFBD00'} >
              Weekly Classes
              </Link>
            </Typography>
            <Typography sx={{ maxWidth: 500 }}>
              <br/>
              Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
            </Typography>
            <Typography sx={{ maxWidth: 500, fontWeight: 600 }}>
              <br/>
              <PhoneIcon /> 919-555-5555
              <br/>
              <EmailIcon /> crossfitsuasponte@gmail.com
              <br/>
              <LocationOnIcon /> 1234 Main St. Raleigh, NC 27609
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 500, display: 'flex', alignItems: 'center'}}>
            <img src={Map} alt='Map' loading='lazy' style={{ width: '100%', height: 'auto', objectFit: 'contain' }}/>
          </Box>
        </Box>
        <Box>
          <Socials />
        </Box>
    </Box>
    )
}

export default Home