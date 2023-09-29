import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'

import vid from '../../Components/Video/vid.mp4'
import './YourVideo.css'
function YourVideos() {
  const vids=[
    {
      _id:1,
     video_src:vid,
     Chanel:"62bafe6752cea35a6c30685f",
     Uploader:"abc",
     title:"video 1",
     description:"description of video 1"
    },
    {
      _id:2,
     video_src:vid,
     Chanel:"6252cea35a6c30685f",
     Uploader:"abc",
     title:"video 2",
     description:"description of video 2"
    },
    {
      _id:3,
     video_src:vid,
     Chanel:"6252cea35a5f",
     Uploader:"abc",
     title:"video 3",
     description:"description of video 3"
    },
    {
      _id:4,
     video_src:vid,
     Chanel:"6252cea35a5f",
     Uploader:"abc",
     title:"video 3",
     description:"description of video 3"
    },
   ];
  return (
    <div className='container_Pages_App'>

    <LeftSidebar/>
    
    <div className='container2_Pages_App'>
     <div className='container_yourvide0'>

        <h1>Your Videos</h1>
        <ShowVideoGrid vids={vids}/>
     </div>
    </div>
    </div>
  )
}

export default YourVideos
