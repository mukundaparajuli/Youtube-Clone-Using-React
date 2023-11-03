import React from 'react'
import SideBar from './SideBar'
import MainBody from './MainBody'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <MainBody/>
    </div>
  );
}

export default Body 