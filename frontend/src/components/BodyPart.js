import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym-color.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{ 
        borderTop: bodyPart === item ? '4px solid #FF2625' : '', 
        backgroundColor: '#fff', 
        borderBottomLeftRadius: '20px', 
        width: '200px', 
        height: '232px', 
        cursor: 'pointer', 
        gap: '47px' 
        }}
        onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="gym building" style={{ width: '70px', height: '70px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> 
        {item}
        </Typography>
    </Stack>
);

export default BodyPart;