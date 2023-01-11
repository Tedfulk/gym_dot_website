import * as React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
    return (
        <Box sx={{ width: 800, ml: 'auto', mr: 'auto', mt: 10, mb: 10 }}>
            <Typography variant='h2' fontWeight={'bold'} mb={5}>
                Frequently Asked Questions
            </Typography>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Can I have a personal training session?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    We offer personal training sessions tailored to your goals. Please contact us for more information.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Can I bring a friend?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Of course the more the merrier. We have a 2 for 1 deal on memberships. You can bring a friend for free.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Is the first class free?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Yes! Absolutely. The first class is free. We believe that you should be able to try out a class before you commit to a membership.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
