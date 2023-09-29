import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import WHL from '../../Components/WHL/WHL';
function WatchLater() {

  const WatchLater=[
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

    <div>
    
      <WHL page={"Watch Later"} videoList={WatchLater}/> 
    </div>
  )
}

export default WatchLater
