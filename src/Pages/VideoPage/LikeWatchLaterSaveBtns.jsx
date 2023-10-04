import React, { useEffect, useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import {RiHeartAddFill} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo } from '../../actions/likedVideo'


function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const dispatch = useDispatch();
    const [SaveVideo,setSaveVideo]=useState(true);
    const [DisLikeBtn,setDisLikeBtn]=useState(false);
    const [LikeBtn,setLikeBtn]=useState(false);

    const likedVideoList = useSelector((state) => state.likedVideoReducer);

  useEffect(() => {
    console.log(likedVideoList);
    likedVideoList?.data.filter((q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map((m) => setLikeBtn(true));
  }, []);

    const toggleSavedVideo=()=>{
        if(SaveVideo){
            setSaveVideo(false);
        }else{
            setSaveVideo(true);
        }
        
    }

    const toggleLikeBtn=(e,lk)=>{
            if (CurrentUser){
                if (LikeBtn) {
                  setLikeBtn(false);
                  dispatch(
                    likeVideo({
                      id: vid,
                      Like: lk - 1,
                    })
                  );
            }else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                  id: vid,
                  Like: lk + 1,
                })
              );
              dispatch(
                addTolikedVideo({
                  videoId: vid,
                  Viewer: CurrentUser?.result._id,
                })
              );
              setDisLikeBtn(false);
            }
          }else {
            alert("Plz Login To give a like");
          }
        
        };

    const toggleDislikebtn=(e,lk)=>{
        if(CurrentUser){

        if(DisLikeBtn){
            setDisLikeBtn(false);
        }else{
            setDisLikeBtn(true);
            if (LikeBtn) {
                dispatch(
                  likeVideo({
                    id: vid,
                    Like: lk - 1,
                  })
                );
            }
            setLikeBtn(false);
        }
    }else{
        alert("plz login to give a like")
    }
    };
    
    
  return (
    <div className='btns_cont_videoPage'>
    <div className='btn_VideoPage'>
        <BsThreeDots/>
    </div>
    
    <div className='btn_VideoPage'>
        <div className='like_videoPage' onClick={(e)=>toggleLikeBtn(e, vv.Like)}>
        {
            LikeBtn ? (<>
            <AiFillLike size={22}  className='btns_videoPage'/>
            </>):(<>
            <AiOutlineLike size={22} className='btns_videoPage'/>
            </> )
        }
            <b>{vv.Like}</b>
         </div>

        <div className='like_videoPage' onClick={(e)=>toggleDislikebtn(e, vv.Like)}>
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
