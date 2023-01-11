import * as React from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import '@fontsource/public-sans';
import HeroBanner from '../assets/images/groupspic.png';


function GroupsPic() {
    return (
        <Box>
            <Card sx={{ minWidth: 300, "--Card-radius": "0px"}}>
                <CardCover>
                <img
                    src={HeroBanner}
                    srcSet={HeroBanner}
                    loading="lazy"
                    alt="Banner"
                    />
                </CardCover>
                <CardContent>
                    <Typography sx={{ fontSize: '4rem', fontFamily: 'sans-serif', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh', fontWeight: 'bold', }} >
                        Groups
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default GroupsPic