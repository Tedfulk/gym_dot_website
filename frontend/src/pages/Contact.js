import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactUsPic from '../components/ContactUsPic';
import Socials from '../components/Socials';


function Contact() {
  return (
    <Box>
      <Box>
        <ContactUsPic />
      </Box>
      <Box sx={{ m: 5, mt: 10, mb: 10, display: 'flex', justifyContent: 'space-evenly' }}>
        <Box>
          <Typography variant='h6' color={'red'} margin={1}>Let's meet each other</Typography>
          <Typography variant='h4' fontWeight={'bold'} >Send us a message!</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'start', mt: 1 }}>
            <Socials />
          </Box>
        </Box>
        <Box>
          <Box component="form" sx={{ '& > :not(style)': { m: 2, display: 'block', width: '30vw' }, }} noValidateautoComplete="off" autoComplete='on' >
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="Message" variant="outlined" fullWidth multiline/>
            <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white' }}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact