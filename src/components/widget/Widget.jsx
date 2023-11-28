import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const Widget = () => {
  return (
    <div className='widget'>
    <div className="left">
      <span className="title">USERS</span>
      <span className="counter">23146</span>
      <span className="link">See All Users</span>
    </div>
    <div className="right">
      <div className="percentage positive">
      <KeyboardArrowUpIcon/>
        30%
        </div>
        <PermIdentityOutlinedIcon className='icon'/>
    </div>
    </div>
  )
}

export default Widget