import * as React from 'react';
import { Typography, Box, Rating, Link} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TheGymPic from '../components/TheGymPic';
import Leeann from '../assets/images/leeann.png';
import Wb from '../assets/images/wb.png';
import Rando from '../assets/images/rando-santch.png';
import Coaches from '../components/Coaches';
import Vern from '../assets/images/vern.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Socials from '../components/Socials'
import Map from '../assets/images/location.png'



function TheGym() {
  return (
    <Box>
      <TheGymPic />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 500, textAlign: 'center', pt: 10, pb: 10 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            A Place To Workout
          </Typography>
          <Typography>
            Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 5, pb: 5, display: 'flex', justifyContent: 'space-evenly', bgcolor: '#405378' }}>
            <img 
            src={Leeann}
            alt="snatch"
            style={{ width: '20%', height: '20%' }}
            />
            <img 
            src={Wb}
            alt="Wall Ball"
            style={{ width: '20%', height: '20%' }}
            />
            <img 
            src={Rando}
            alt="Snatch"
            style={{ width: '20%', height: '20%' }}
            />
      </Box>
      <Box sx={{ mt: 10, mb: 10, display: 'flex', justifyContent: 'space-evenly', textAlign: 'center'}}>
        <Box sx={{ maxWidth: 300 }}>
          <CheckCircleOutlineIcon sx={{ color: '#FFBD00', fontSize: '4rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, }}>
            Experienced
          </Typography>
          <Typography>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 300 }}>
          <CheckCircleOutlineIcon sx={{ color: '#FFBD00', fontSize: '4rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, }}>
            Professional
          </Typography>
          <Typography>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 300 }}>
          <CheckCircleOutlineIcon sx={{ color: '#FFBD00', fontSize: '4rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, }}>
            Motivated
          </Typography>
          <Typography>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Typography variant='h3' sx={{ textAlign: 'center', m: 2 }}>Meet Our Coaches</Typography>
        <Coaches />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 10}}>
        <Box sx={{ textAlign: 'center' }}>
            <Rating name="read-only" value={5} readOnly sx={{ fontSize: '1rem', marginBottom: 1, }} />
            <Typography sx={{ maxWidth: 300, mt: 2, mb: 2}}>
              Working out in this Gym has been one of the best decisions I have ever made for my fitness. Really love the positive vibes and friendly atmosphere.
            </Typography>
          <Box>
            <img src={Vern} alt='Vern' style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
            <Typography sx={{ fontSize: '1rem' }} >
              Vern McDonald
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Location */}
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 10, pb: 5, bgcolor: '#405378', color: 'white'}}>
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant='h3' sx={{ fontWeight: 600, mb: 2 }}>
            Come Visit Us
          </Typography>
          <Typography variant='h6' sx={{ maxWidth: 500 }}>
            <Link href='#schedule' underline='hover' color={'#FFBD00'} >
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
        <Box sx={{ maxWidth: 500 }}>
          <img src={Map} alt='Map' style={{ width: '100%', height: '100%' }}/>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#405378' }}>
        <Socials />
      </Box>
    </Box>
  )
}

export default TheGym