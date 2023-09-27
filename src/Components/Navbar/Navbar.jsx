import React from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri' 
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Navbar({toggleDrawer}) {
  // const CurrentUser=null;
  const CurrentUser={
    result: {
      email: "xyz@gmail.com",
      joinedOne: "koi bhi date",
    },
  };
  return (
    <div className='Container_Navbar'>
      <div className='Burger_Logo_Navbar'>
      <div className='burger' onClick={()=>toggleDrawer()}>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <Link to={'/'} className='logo_div_Navbar'>
        <img src={logo} alt=''/>
        <p className='logo_title_navbar'>YouTube</p>
      </Link>
      
      </div>
      <SearchBar/>
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
      <div className='apps_Box'>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
      </div>
      <IoMdNotificationsOutline size={22} className="Mic_SearchBar" />
      <div className='Auth_cont_Navbar'>
      {
        CurrentUser ? 
        (<>
          <div className='Channel_logo_App'>
            <p className='fstChar_logo_App'>
             {
              CurrentUser?.result.name ? (
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
                ):(
                <>
                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>
                )
             }
            </p>
          </div>
        </>
        ):(
        <>
        <p className='Auth_Btn'>
          <BiUserCircle size={22}/>
          <b>Sign In</b>
        </p>
        </>)
        //if user is not logged in then show sign in button
      }
        
      </div>

    </div>
  )
}

export default Navbar
