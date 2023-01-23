import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressBar from '../components/ProgressBar';
import Leeann from '../assets/images/leeann.png';
import Ted from '../assets/images/ted-snatch.jpeg';
import Rando from '../assets/images/rando-santch.png';
import Mic from '../assets/images/ted-mic.png';
import OlympicPic from '../components/OlympicPic';

const OlympicLifting = () => {
    
    const [strength, setStrength] = useState(0);
    const [mindset, setMindset] = useState(0);
    const [endurance, setEndurance] = useState(0);
    
    useEffect(() => {
        const testData = [
        { completed: 45 },
        { completed: 50 },
        { completed: 55 },
        { completed: 60 },
        { completed: 70 },
        { completed: 75 },
        { completed: 80 },
        { completed: 85 },
        { completed: 90 },
        { completed: 95 },
    ];
    setTimeout(() => setStrength(testData[Math.floor(Math.random() * 10)].completed), 1000);
}, []);
useEffect(() => {
        const testData = [
        { completed: 45 },
        { completed: 50 },
        { completed: 55 },
        { completed: 60 },
        { completed: 70 },
        { completed: 75 },
        { completed: 80 },
        { completed: 85 },
        { completed: 90 },
        { completed: 95 },
        ];
        setTimeout(() => setMindset(testData[Math.floor(Math.random() * 10)].completed), 1000);
    }, []);
    useEffect(() => {
        const testData = [
        { completed: 45 },
        { completed: 50 },
        { completed: 55 },
        { completed: 60 },
        { completed: 70 },
        { completed: 75 },
        { completed: 80 },
        { completed: 85 },
        { completed: 90 },
        { completed: 95 },
        ];
        setTimeout(() => setEndurance(testData[Math.floor(Math.random() * 10)].completed), 1000);
    }, []);

return (
    <Box>
        <OlympicPic />
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 10, mb: 5 }}>
                <Box sx={{ maxWidth: 500  }}>
                    <Typography variant="h4" sx={{ textAlign: 'start', fontWeight: 'bold', mb: 2 }}>
                        Why Olympic Lifting?
                    </Typography>
                    <Typography>
                        Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
                    </Typography>
                </Box>
                <Box sx={{ mb: 5, minWidth: 500 }}>
                    <Typography variant="h6" sx={{ textAlign: 'start', fontWeight: 'bold', mb: 2, ml: 2 }}>
                        Strength
                    </Typography>
                    <ProgressBar
                        bgcolor={'#FFBD00'}
                        completed={strength}
                        />
                    <Typography variant="h6" sx={{ textAlign: 'start', fontWeight: 'bold', mb: 2,ml: 2 }}>
                        Mindset
                    </Typography>
                    <ProgressBar
                        bgcolor={'#FFBD00'}
                        completed={mindset}
                        />
                    <Typography variant="h6" sx={{ textAlign: 'start', fontWeight: 'bold', mb: 2, ml: 2 }}>
                        Endurance
                    </Typography>
                    <ProgressBar
                        bgcolor={'#FFBD00'}
                        completed={endurance}
                        />
                </Box>
            </Box>
            <Box sx={{ pt: 10, pb: 10, display: 'flex', justifyContent: 'space-evenly', bgcolor: '#405378'}}>
                <img 
                src={Leeann}
                alt="snatch"
                style={{ width: '20%', height: '20%' }}
                />
                <img 
                src={Ted}
                alt="Ted snatch"
                style={{ width: '20%', height: '20%' }}
                />
                <img 
                src={Rando}
                alt="Snatch"
                style={{ width: '20%', height: '20%' }}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', color: 'black', p: 5 }}>
                <Box>
                    <Typography variant="h4" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                            Monday, Wednesday, Friday
                    </Typography>
                    <Box sx={{ display: 'flex', ml: 5, gap: 2.5}}>
                        <AccessTimeIcon sx={{  }}/>
                        <Typography sx={{ textAlign: 'start', mb: 2, }}>
                        6:00 AM - 7:00 AM
                        </Typography>
                        <Typography component={'span'} sx={{ color: '#FFBD00', textAlign: 'right'}}>
                            - Olympic Lifting
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                        <AccessTimeIcon sx={{  }}/>
                        <Typography sx={{ textAlign: 'start', mb: 2, }}>
                        9:30 AM - 10:30 AM
                        </Typography>
                        <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                            - Olympic Lifting
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                        <AccessTimeIcon sx={{  }}/>
                        <Typography sx={{ textAlign: 'start', mb: 2, }}>
                        12:00 PM - 1:00 PM
                        </Typography>
                        <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                            - Olympic Lifting
                        </Typography>
                    </Box>
                </Box>
            <Box>
                <Typography variant="h4" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                        Tuesday, Thursday
                </Typography>
                <Box sx={{ display: 'flex', ml: 5, gap: 2.5}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', textAlign: 'right'}}>
                        - Olympic Lifting
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    6:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Olympic Lifting
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{ bgcolor: '#405378', color: 'white', pt: 5, pb: 5 }}> 
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, fontWeight: '700', }}>
                Membership Options
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 7, mb: 5, textAlign: 'center' }}>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 2, color: 'goldenrod' }}>
                    GOLD
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
                    $149 / month
                    </Typography>
                    <Typography sx={{ maxWidth: 300 }}>
                    12 Month Membership
                    <br/>
                    Unlimited Classes
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 2, color: 'silver' }}>
                    SILVER
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 2, }}>
                    $199 / month
                    </Typography>
                    <Typography sx={{ maxWidth: 300 }}>
                    No Contract. No Commitment.
                    <br/>
                    3 Classes Per Week
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 2, color: '#A97142' }}>
                    BRONZE
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 600, mb: 2, }}>
                    $30 / Class
                    </Typography>
                    <Typography sx={{ maxWidth: 300 }}>
                    Dropping in?
                    <br/>
                    Pay Per Class.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Button href="Contact" variant="outlined" size="medium" color='warning' sx={{ fontFamily: 'sans-serif', color: '#FFBD00',border: '2px solid #FFBD00' }}>SIGN UP NOW</Button>
            </Box>
        </Box>
        <Box sx={{ pt: 10, pb: 10, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <img 
            src={Mic}
            alt="Ted Mic"
            style={{ width: '30%', height: '30%' }}
            />
            <Box sx={{ textAlign: 'center', maxWidth: 500, }}>
                <Typography variant="h4" sx={{ textAlign: 'start', fontWeight: 'bold', mb: 5 }}>
                    <span style={{fontWeight: '100'}}>with</span> Ted
                </Typography>
                <Typography sx={{ mt: 2, maxWidth: 500, }}>
                    We are so proud of her achievements and know that although she makes it look easy - managing BOTH of our gym locations and training as a world class athlete is not an easy feat. She meets any challenge head on, with no mercy and we expect nothing less in Minnesota.
                </Typography>
            </Box>
        </Box>
    </Box>
)
}

export default OlympicLifting