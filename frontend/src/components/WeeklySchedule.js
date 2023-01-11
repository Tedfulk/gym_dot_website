import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Typography, Card, CardMedia } from '@mui/material'
import Grip from '../assets/images/snatch-grip.jpeg'


function WeeklySchedule() {
    return (
    <Box sx={{ bgcolor: '#405378', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pt: 5, pb: 10, gap: 2 }}>
            <CalendarMonthIcon sx={{ fontSize: '3.5rem', ml: 5}}/> 
            <Typography variant="h2" fontWeight={'700'}>Weekly Class Schedule</Typography>
        </Box>
        {/* Monday, Tuesday, Wednesday */}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                    Monday
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
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    5:30 PM - 6:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                    Tuesday
                </Typography>
                <Box sx={{ display: 'flex', ml: 5, gap: 2.5}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    6:00 AM - 7:00 AM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', textAlign: 'right'}}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    9:30 AM - 10:30 AM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    12:00 PM - 1:00 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Olympic Lifting
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    5:30 PM - 6:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Olympic Lifting
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    6:30 PM - 7:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Yoga
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'start', mb: 3, ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                    Wednesday
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
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    5:30 PM - 6:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
            </Box>
        
        </Box>
        {/* Thursday and Friday */}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 5, pb: 5 }}>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                    Thursday
                </Typography>
                <Box sx={{ display: 'flex', ml: 5, gap: 2.5}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    6:00 AM - 7:00 AM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', textAlign: 'right'}}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    9:30 AM - 10:30 AM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    12:00 PM - 1:00 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Olympic Lifting
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    5:30 PM - 6:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Olympic Lifting
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    6:30 PM - 7:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Yoga
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'start', mb: 3,ml: 5, pb: 3, fontWeight: '500', borderBottom: 'solid 3px', maxWidth: '300px'}}>
                    Friday
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
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    4:30 PM - 5:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: 5, gap: 2}}>
                    <AccessTimeIcon sx={{  }}/>
                    <Typography sx={{ textAlign: 'start', mb: 2, }}>
                    5:30 PM - 6:30 PM
                    </Typography>
                    <Typography component={'span'} sx={{ color: '#FFBD00', }}>
                        - Crossfit
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}

export default WeeklySchedule