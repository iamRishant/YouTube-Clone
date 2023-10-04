// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { fetchAllChanel } from './actions/chanelUser';
import { useDispatch } from 'react-redux';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo);
  }, [dispatch]);



  const [toggleDrawerSidebar,setToggleDrawerSidebar]=useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  const [vidUploadPage,setVidUploadPage]=useState(false)
  const [EditCreateChanelBtn,setEditCreateChanelBtn]=useState(false)
  return (
    <Router>
    {
      vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>
    }
    
    {
      EditCreateChanelBtn &&
      <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    }
      <Navbar
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          toggleDrawer={toggleDrawer}

      />
      {
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    </Router>
  );
}

export default App;
