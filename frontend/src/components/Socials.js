import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Link  } from '@mui/material'

const Socials = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 2 }}>
                <Link href='https://www.facebook.com/crossfitsuasponte/'>
                <FacebookIcon sx={{ mr: 1, fontSize: '2rem' }} />
                </Link>
                <Link href='https://www.instagram.com/crossfitsuasponte/'>
                <InstagramIcon sx={{ mr: 1, color: 'hotpink', fontSize: '2rem' }} />
                </Link>
                <Link href='https://www.youtube.com/c/Crossfitsuasponte'>
                <YouTubeIcon sx={{ mr: 1, color: 'red', fontSize: '2rem' }} />
                </Link>
                <Link href='https://www.google.com/search?q=crossfit+sua+sponte&oq=crossfit+sua&aqs=chrome.0.0i512j69i57j46i175i199i512j0i22i30l2j69i60l3.9448j0j7&sourceid=chrome&ie=UTF-8#ip=1'>
                <GoogleIcon sx={{ mr: 1, fontSize: '2rem' }} />
                </Link>
            </Box>
        </Box>
    )
}


export default Socials