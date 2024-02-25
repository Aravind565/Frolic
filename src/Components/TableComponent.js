import React, { useState } from "react";
import Comments from "./Comments";
import "./Colour.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MovingIcon from '@mui/icons-material/Moving';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import IconButton from '@mui/material/IconButton';

const TableComponent = (props) => {
  //menu-box
  const [showDelete, setShowDelete] = useState(false);
  const handleCatClick = () => {
    setShowDelete(!showDelete);
  };

  //delete-post
  const [postVisible, setPostVisible] = useState(true);
  const handleDelete = () => {
    setPostVisible(false);
  };

  //like-count,colour-changes
  const [like, setLike] = useState(props.liked);
  const [unlike, setUnlike] = useState(false);

  const [unFilledLike, setUnFilledLike] = useState(false);

  const handlelikes = () => {
    setLike(unlike ? like - 1 : like + 1);
    setUnlike(!unlike);
    setUnFilledLike(!unFilledLike); 
  };

    //Comment-outline
    const [isOutlined, setIsOutlined] = useState(false);
    const handleCommentClick = () => {
      setIsOutlined((prev) => !prev);
    };
    //Bookmark-outline
    const [islined, setIslined] = useState(false);
    const handleBookClick = () => {
      setIslined((prev) => !prev);
    };

    const [showShare, setShowShare] = useState(false);
    const handleShareClick = () => {
      setShowShare((prev) => !prev);
    };


  if (!postVisible) {
    return null; // If post should not be visible, return null to render nothing
  }
  
  return (
    <div className="hari">
      <center>
        <div className="container">
          <div className="header">
            <div className="round">
              <img src={props.pic} className="p-im" alt="profile-pic" />
            </div>
            <div className="head_corner">
              <h2 className="p-name">{props.name}</h2>
              <p className="p-time">Few minutes ago</p>
            </div>
            <div className="p-menu" onClick={handleCatClick}>
              <MoreVertIcon fontSize="medium" />
            </div>

            <div className={showDelete ? "delete visible" : "delete"}>
              <div className="options">
                <button><GroupRemoveIcon/>Unfollow</button>
                <button onClick={handleDelete}><VisibilityOffIcon/>Not Interested in this post</button>
                <button><StarBorderIcon sx={{color:'goldenrod'}}/>Add to favourites</button>
                <button><ReportGmailerrorredIcon sx={{color:'red'}}/>Report post</button>
              </div>
            </div>
          </div>
          <p className="c-para">{props.description}</p>
          <img src={props.post} className="c-img" alt="content" />
          <div className="footer">
            <div className="like">
              <div className="c">
                  <IconButton onClick={handleCommentClick}>{isOutlined ?(<ChatBubbleIcon  sx={{color:'black',fontSize:33}}/>): (<ChatBubbleOutlineIcon  sx={{color:'black',fontSize:33}}/>)}</IconButton>
                  <p id='like_comment'>{props.com} comments</p>
              </div>
              <div className="c">
                  <IconButton onClick={handlelikes} sx={{cursor: 'pointer'}}>{unFilledLike ? (<FavoriteRoundedIcon sx={{ fontSize: 36, color: "red" }} />) : (<FavoriteBorderOutlinedIcon sx={{ fontSize: 36, color: "black" }} />)}</IconButton> 
                  <p id='like_comment'>{like} likes</p>
              </div>
              <div className="v">
                  <MovingIcon sx={{fontSize:40,cursor: 'pointer'}}/>
                  <p id='like_comment'>{props.view} views</p>
              </div>
            <div className="bookmark">
            <ThumbDownIcon sx={{fontSize:30,cursor:'pointer'}}/>
            <IconButton onClick={handleBookClick}>{islined ?(<BookmarkIcon  sx={{color:'black',fontSize:33}}/>): (<BookmarkBorderIcon  sx={{color:'black',fontSize:33}}/>)}</IconButton>
            <ShareIcon onClick={handleShareClick} sx={{fontSize:30,cursor:'pointer'}}/>
            
            </div>
            </div>
          </div>
            <div className={showShare ? "sharing visible" : "sharing"}>
              <div className="platforms">
                <WhatsAppIcon sx={{fontSize:40,cursor:'pointer',color:'green'}}/>
                <TelegramIcon sx={{fontSize:40,cursor:'pointer',color:'blue'}}/>
                <RedditIcon sx={{fontSize:40,cursor:'pointer',color:'red'}}/>
                <InstagramIcon sx={{fontSize:40,cursor:'pointer',color:'rgb(228, 64, 95)'}}/>
                <FacebookIcon sx={{fontSize:40,cursor:'pointer',color:'darkblue'}}/>
              </div>
            </div>
            {/* comments */}
            <div className={isOutlined ? "comments visible" : "comments"}> 
            <Comments/>
            </div>
        </div>
      </center>
    </div>
  );
};

export default TableComponent;
