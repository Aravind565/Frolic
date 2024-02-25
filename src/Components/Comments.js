import React from 'react'
import './Comments.css'
import SendIcon from '@mui/icons-material/Send';
import balebat from './balebat.jpg'

const Comments = () => {
  return (
    <div>
        <div className="comments-yours">
            <div className='comment-header'>
                <img src={balebat} className='comment-header-image'/>
                <input type='text' placeholder='Your Comments out here...' id='input'/>
                <SendIcon sx={{fontSize:34,color:'black',cursor:'pointer'}}/>
            </div>
        </div>
    </div>
  )
}

export default Comments