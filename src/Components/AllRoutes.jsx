import React from 'react';
import Home from '../Pages/Home/Home';
import Library from '../Pages/Library/Library';
import YourVideos from '../Pages/YourVideos/YourVideos';
import WatchHistory from '../Pages/History/WatchHistory';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import {
    Routes,
    Route,
    Link
}from "react-router-dom";
import WatchLater from '../Pages/WatchLater/WatchLater';

function AllRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/library' element={<Library/>} />
    <Route path='/yourvideos' element={<YourVideos/>} />
    <Route path='/history' element={<WatchHistory/>} />
    <Route path='/watchlater' element={<WatchLater/>} />
    <Route path='/likedvideos' element={<LikedVideo/>} />
      
    </Routes>
  )
}

export default AllRoutes
