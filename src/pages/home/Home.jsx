import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widget/Widget'
function Home() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <div className="widgets">
      {/* <Widget type='order' />
      <Widget type='earning'/> */}
      <Widget type='users'/>
      {/* <Widget type='balance'/> */}
    </div>
    </div>
    </div>
  )
}

export default Home