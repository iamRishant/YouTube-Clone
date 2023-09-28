import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import {RiHeartAddFill} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
function LikeWatchLaterSaveBtns() {

    const [SaveVideo,setSaveVideo]=useState(true);
    const [DisLikeBtn,setDisLikeBtn]=useState(false);
    const [LikeBtn,setLikeBtn]=useState(false);

    const toggleSavedVideo=()=>{
        if(SaveVideo){
            setSaveVideo(false);
        }else{
            setSaveVideo(true);
        }
        
    }

    const toggleLikeBtn=()=>{
        if(LikeBtn){
            setLikeBtn(false);
        }else{
            setLikeBtn(true);
        }
    }

    const toggleDislikebtn=()=>{
        if(DisLikeBtn){
            setDisLikeBtn(false);
        }else{
            setDisLikeBtn(true);
        }
    }
    
    
  return (
    <div className='btns_cont_videoPage'>
    <div className='btn_VideoPage'>
        <BsThreeDots/>
    </div>
    
    <div className='btn_VideoPage'>
        <div className='like_videoPage' onClick={()=>toggleLikeBtn()}>
        {
            LikeBtn ? (<>
            <AiFillLike size={22}  className='btns_videoPage'/>
            </>):(<>
            <AiOutlineLike size={22} className='btns_videoPage'/>
            </> )
        }
            <b>10k</b>
         </div>

        <div className='like_videoPage' onClick={()=>toggleDislikebtn()}>
        {
            DisLikeBtn ? (<>
            <AiFillDislike size={22} className='btns_videoPage'/>


            </>):(<>
            <AiOutlineDislike size={22} className='btns_videoPage'/>

            </> )
        }
            <b>Dislike</b>
         </div>
        <div className='like_videoPage' onClick={()=>toggleSavedVideo()}>
        {
            SaveVideo ? (<>
            <RiPlayListAddFill size={22} className='btns_videoPage'/>
            <b>Save</b>

            </>):(<>
            <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
            <b>Saved</b>

            </> )
        }
        </div>

        <div className='like_videoPage'>
        <>
            <RiHeartAddFill size={22} className='btns_videoPage'/>
            <b>Thanks</b>
        </>
        
        </div>
        <div className='like_videoPage'>
        <>
            <RiShareForwardLine size={22} className='btns_videoPage'/>
            <b>Share</b>
        </>

        </div>

        
    </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
