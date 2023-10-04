import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'

import './WHLcss.css'
import WHLVideoList from './WHLVideoList'
import { useSelector } from 'react-redux';
function WHL({page,videoList}) {
    const CurrentUser = useSelector((state) => state?.currentUserReducer);

  return (
    <div className='container_Pages_App'>


    <LeftSidebar/>
    
    <div className='container2_Pages_App'>
        <p className='container_whl'>
            <div className='box_WHL leftsidebar_whl'>
                <b>Your {page} Shown Here</b>

                {
                    page==="History"&&
                <div className='clear_History_btn'>
                    Clear History
                </div>
                }

            </div>
            <div className='rightSide_whl'>
                <h1>{page}</h1>
                <div className='whl_list'>
                
                <WHLVideoList
                    page={page}
                    CurrentUser={CurrentUser?.result._id}
                    videoList={videoList}
                />
                </div>
            </div>
        </p>
    </div>
    </div>
  )
}

export default WHL
