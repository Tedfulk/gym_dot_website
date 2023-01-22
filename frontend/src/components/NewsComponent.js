import React, { useState, useEffect } from 'react'
import { Typography, Box, Stack, Link } from '@mui/material';
import { nyOptions, fetchData } from '../utils/fetchData';

const NewsComponent = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            const nyData = await fetchData('https://ny-times-news-titles-and-urls.p.rapidapi.com/news', nyOptions);
            console.log(nyData.health)
            setNews(nyData.health);
        };

        fetchNewsData();
    }, []);


    return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography variant='h2' fontWeight='bold' >
            News
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {news.map((article, idx) => (
                <Box key={idx} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', p: '10px', border: '1px solid #000', borderRadius: '10px', m: '10px' }}>
                    <Typography variant='h5' fontWeight='bold' sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
                        {article.title}
                    </Typography>
                    <Link variant='h5' fontWeight='bold' sx={{ fontSize: { lg: '24px', xs: '20px' } }} >
                        {article.url}
                    </Link>
                </Box>
            ))}
        </Stack>
    </Box>
    )
}

export default NewsComponent