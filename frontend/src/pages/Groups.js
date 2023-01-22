import React from 'react'
import { Box, Typography, Button, Paper } from '@mui/material'
import GroupsPic from '../components/GroupsPic';
import Ted from '../assets/images/ted-snatch.jpeg';
import Rings from '../assets/images/rings.png';
import Yoga from '../assets/images/yoga-class.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WeeklySchedule from '../components/WeeklySchedule';
import SignUpNow from '../components/SignUpNow';
import Faq from '../components/Faq';

function Groups() {
  return (
    <Box>
      <Box>
        <GroupsPic />
      </Box>
      {/* Olympic Lifting */}
      <Box sx={{ m: 5, mt: 10, display: 'flex', justifyContent: 'space-evenly' }}>
        <Box >
          <img 
          src={Ted}
          alt="Snatch"
          style={{ maxWidth: '80%', maxHeight: '80%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Box>
        <Box>
          <Paper sx={{ textAlign: 'center',}}>
            <Typography variant='h4' fontWeight={'bold'} minWidth={500} >Olympic Lifting</Typography>
          </Paper>
          <Typography variant='h6' fontWeight={'bold'} m={1} textAlign={'center'}><span style={{ fontWeight: 100 }}>with </span>Ted Fulk</Typography>
          <Typography sx={{ maxWidth: 500, mt: 5,  mb: 5, }}>
                Monday, Wednesday, Friday
                <br/>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 2}}>
                <AccessTimeIcon /> 6:00am, 9:30am, Noon
                </Typography>
          </Typography>
          <Typography sx={{ maxWidth: 500, mt: 5,  mb: 5, }}>
                Tuesday, Thursday
                <br/>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 2}}>
                <AccessTimeIcon /> 4:30pm, 5:30pm
                </Typography>
          </Typography>
          <Typography sx={{ maxWidth: 500, lineHeight: 2}}>
            Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
          <Button href="OlympicLifting" variant='text' size="medium" color='error' sx={{ fontFamily: 'sans-serif', color: 'red', border: '2px solid red', }}>Details</Button>
          </Box>
        </Box>
      </Box>
        {/* Crossfit */}
      <Box sx={{ m: 5, display: 'flex', justifyContent: 'space-evenly' }}>
        <Box>
          <Paper sx={{ textAlign: 'center',}}>
            <Typography variant='h4' fontWeight={'bold'} minWidth={500} >Crossfit</Typography>
          </Paper>
          <Typography variant='h6' fontWeight={'bold'} m={1} textAlign={'center'}><span style={{ fontWeight: 100 }}>with </span>Sierra Tjelmeland</Typography>
          <Typography sx={{ maxWidth: 500, mt: 5,  mb: 5, }}>
                Tuesday, Thursday
                <br/>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 2}}>
                <AccessTimeIcon /> 6:00am, 9:30am, Noon
                </Typography>
          </Typography>
          <Typography sx={{ maxWidth: 500, mt: 5,  mb: 5, }}>
                Monday, Wednesday, Friday
                <br/>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 2}}>
                <AccessTimeIcon /> 4:30pm, 5:30pm
                </Typography>
          </Typography>
          <Typography sx={{ maxWidth: 500, lineHeight: 2}}>
            Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
          <Button href="Crossfit" variant='text' size="medium" color='error' sx={{ fontFamily: 'sans-serif', color: 'red', border: '2px solid red', }}>Details</Button>
          </Box>
        {/* Yoga */}
        </Box>
        <Box >
          <img 
          src={Rings}
          alt="Rings"
          style={{ maxWidth: '80%', maxHeight: '80%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Box>
      </Box>
      <Box sx={{ m: 5, display: 'flex', justifyContent: 'space-evenly' }}>
        <Box >
          <img 
          src={Yoga}
          alt="Yoga"
          style={{ maxWidth: '80%', maxHeight: '80%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Box>
        <Box>
          <Paper sx={{ textAlign: 'center', }}>
            <Typography variant='h4' fontWeight={'bold'} minWidth={500}>Yoga</Typography>
          </Paper>
          <Typography variant='h6' fontWeight={'bold'} m={1} textAlign={'center'}><span style={{ fontWeight: 100 }}>with </span>James Oroho</Typography>
          <Typography sx={{ maxWidth: 500, mt: 5,  mb: 5, }}>
                Tuesday, Thursday
                <br/>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 2}}>
                <AccessTimeIcon /> 6:30pm
                </Typography>
          </Typography>
          <Typography sx={{ maxWidth: 500, lineHeight: 2}}>
            Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
          <Button href="Yoga" variant='text' size="medium" color='error' sx={{ fontFamily: 'sans-serif', color: 'red', border: '2px solid red', }}>Details</Button>
          </Box>
        </Box>
      </Box>
      <WeeklySchedule />
      <SignUpNow />
      <Faq />
    </Box>

  )
}

export default Groups