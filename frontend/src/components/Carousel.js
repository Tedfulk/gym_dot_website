import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
// import { Worm, LizPress, LizClean, SuaFam, SweatAngel, Gymnastics } from '../assets/images'
import carouselimages from '../assets/images'




function GymPics() {

    var items = [
        {
            id: 1,
            name: "Worm",
            image: carouselimages['worm.png']
        },
        {
            id: 2,
            name: "Liz Press",
            image: carouselimages['liz-press.png']
        },
        {
            id: 3,
            name: "Liz Clean",
            image: carouselimages['liz-clean.png']
        },
        {
            id: 4,
            name: "Sua Fam",
            image: carouselimages['sua-fam.png']
        },
        {
            id: 5,
            name: "Sweat Angel",
            image: carouselimages['sweat-angel.png']
        },
        {
            id: 6,
            name: "Gymnastics",
            image: carouselimages['gymnastics.png']
        },
        {
            id: 7,
            name: "alexis",
            image: carouselimages['alexis.png']
        },
        {
            id: 8,
            name: "cakeweightsemi",
            image: carouselimages['cakeweightsemi.png']
        },
        {
            id: 9,
            name: "caringjohn",
            image: carouselimages['caringjohn.png']
        },
        {
            id: 10,
            name: "cleanprep",
            image: carouselimages['cleanprep.png']
        },
        {
            id: 11,
            name: "cow",
            image: carouselimages['cow.png']
        },
        {
            id: 12,
            name: "doggy",
            image: carouselimages['doggy.png']
        },
        {
            id: 13,
            name: "emma",
            image: carouselimages['emma.png']
        },
        {
            id: 14,
            name: "mandy-and-tori",
            image: carouselimages['mandy-and-tori.png']
        },
        {
            id: 15,
            name: "pushups",
            image: carouselimages['pushups.png']
        },
        {
            id: 16,
            name: "she-unit",
            image: carouselimages['she-unit.png']
        },
        {   
            id: 17,
            name: "sierra-clean",
            image: carouselimages['sierra-clean.png']
        },
        {
            id: 18,
            name: "sofia",
            image: carouselimages['sofia.png']
        },
        {
            id: 19,
            name: "stephen",
            image: carouselimages['stephen.png']
        },
        {
            id: 20,
            name: "swing",
            image: carouselimages['swing.png']
        },
        {
            id: 21,
            name: "valk",
            image: carouselimages['valk.png']
        },
        {
            id: 22,
            name: "yogaclass",
            image: carouselimages['yogaclass.png']
        },
        
    ]

    return (
        <Carousel navButtonsAlwaysVisible='true' animation='slide' >
            {
                items.map( (item) => 
                <Paper sx={{height: '100%', width: '100%'}}>
                    <img src={item.image} alt={item.name} style={{ width: '40%', height: '40%', marginLeft: '30%', paddingBottom: '2rem'}}/> 
                </Paper>
                )
            }
        </Carousel>
    )
}

export default GymPics