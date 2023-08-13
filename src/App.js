
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { 
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
  ChannelDetail } from './components';

 const  App=()=> (
  <BrowserRouter>

<Box sx={{backgroundColor: '#0000'}}>
  <NavBar></NavBar>
  <Routes>
    <Route name="home" path='/' element={<Feed/>} />
    <Route name="videos" path='/video/:id' element={<VideoDetail/>} />
    <Route name="channel_detail" path='/channel/:id' element={<ChannelDetail/>} />
    <Route name="search" path='/search' element={<SearchFeed/>} />
  </Routes>
</Box>
  
  </BrowserRouter>
)

export default App;
