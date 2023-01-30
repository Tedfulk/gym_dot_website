import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import TheGym from './pages/TheGym';
import Groups from './pages/Groups';
import News from './pages/News';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OlympicLifting from './pages/OlympicLifting';
import Crossfit from './pages/Crossfit';
import Yoga from './pages/Yoga';


const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/The Gym" element={<TheGym />} />
                    <Route path="/Groups" element={<Groups />} />
                    <Route path="/OlympicLifting" element={<OlympicLifting />} />
                    <Route path="/Crossfit" element={<Crossfit />} />
                    <Route path="/Yoga" element={<Yoga />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Exercises" element={<Exercises />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
    };

export default App;