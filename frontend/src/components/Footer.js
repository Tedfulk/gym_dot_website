import * as React from 'react';
import { Box, Typography } from '@mui/material/';


export default function footer() {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', width: '100%', height: '2rem', display: 'flex', justifyContent: 'space-evenly', pt: 1 }}>
      <Typography>
        Made with Material UI
      </Typography>
      <Typography>
        |
      </Typography>
      <Typography>
        Powered by React and Energy Drinks
      </Typography>
      <Typography>
        |
      </Typography>
      <Typography>
        © 2023 Crossfit Sua Sponte
      </Typography>
    </Box>
  );
}