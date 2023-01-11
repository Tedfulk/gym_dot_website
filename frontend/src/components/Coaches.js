import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography, Box } from '@mui/material'
import carouselimages from '../assets/images'




function GymPics() {

    var items = [
        {
            id: 1,
            name: "Ted",
            image: carouselimages['ted.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 2,
            name: "Sierra",
            image: carouselimages['sierra.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 3,
            name: "Neil",
            image: carouselimages['neil.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 5,
            name: "Niki",
            image: carouselimages['niki.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 6,
            name: "Steven",
            image: carouselimages['steven.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 7,
            name: "Sophia",
            image: carouselimages['sophia.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 10,
            name: "James",
            image: carouselimages['james.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 11,
            name: "Mesha",
            image: carouselimages['mesha.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 13,
            name: "Justin",
            image: carouselimages['justin.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 14,
            name: "John",
            image: carouselimages['john.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 15,
            name: "Corrine",
            image: carouselimages['corrine.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 18,
            name: "Aubrey",
            image: carouselimages['aubrey.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
        {
            id: 19,
            name: "Alicia",
            image: carouselimages['alicia.png'],
            description: 'Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.'
        },
    ]
    
    return (
        <Carousel navButtonsAlwaysVisible='true' animation='slide' >
            {
                items.map( (item) => 

                <Paper  key={item.id} sx={{height: '100%', width: '100%', bgcolor: '#405378' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={item.image} alt={item.name} style={{ width: '25%', height: '25%', marginLeft: '20%', paddingBottom: '2rem', paddingTop: '2rem'}}/> 
                        <Box sx={{ textAlign: 'center', ml: 5 }}>
                            <Typography variant='h5' sx={{ color: 'white', }}>
                                {item.name}
                            </Typography>
                            <Typography sx={{ color: 'white', maxWidth: 500, mt: 3,}}>
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                )
            }
        </Carousel>
    )
}

export default GymPics