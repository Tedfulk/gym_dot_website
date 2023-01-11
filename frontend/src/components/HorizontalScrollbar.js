import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow" >
        <ArrowBackIcon 
        fontSize='large'
        style={{ cursor: 'pointer' }}
        />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow" >
        <ArrowForwardIcon 
        fontSize='large'
        style={{ cursor: 'pointer' }}
        />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, bodyParts }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map((item) => (
            <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            >
            {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;