import React from 'react'
import './ShowVideo.css'
function ShowVideo({vid}) {
  return (
    <>
      <div>
        <video
            src={`${vid?.video_src}`}
            className='video_ShowVideo'
        ></video>
      </div>
      <div className='video_description'>
        <div className='Channel_logo_App'>
          <div className='fstChar_logo_App'>
            <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className='video_details'>
          <p className='title_vid_ShowVideo'>title</p>
          <pre className='vid_view_UploadTime'>17-03-2003</pre>
          <pre className='vid_view_UploadTime'>1M views <div className='dot'></div>Video uploaded 20 years ago</pre>
        </div>
      </div>
    </>
  )
}

export default ShowVideo
