import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spiderman from "./spiderman.jpg";
import "./Profile.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import logoFro from "./logoFro.png";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
const Profile = () => {
  const [userData, setUserData] = useState({
    username: "spider_man",
    about: "New York, USA | Actor | Your friendly neighbourhood Spiderman",
    posts: [],
    followers: 0,
    following: 0,
    profileImage: spiderman,
    showShareOptions: false,
    showMenu: false,
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // Simulating API call
    setTimeout(() => {
      setUserData({
        ...userData,
        posts: [
          { id: 1, content: "Post 1" },
          { id: 2, content: "Post 2" },
          { id: 3, content: "Post 3" },
        ],
        followers: 100,
        following: 50,
      });
    }, 1000);
  };

  const {
    username,
    about,
    posts,
    followers,
    following,
    profileImage,
    showShareOptions,
    showMenu,
  } = userData;

  const toggleMenu = () => {
    setUserData({
      ...userData,
      showMenu: !showMenu,
    });
  };

  const handleShareButtonClick = () => {
    setUserData({
      ...userData,
      showShareOptions: !showShareOptions,
    });
  };

  const handleLogout = () => {
    // Perform logout action, such as clearing local storage, etc.
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="app">
      <div className="sidebar">
        <img src={logoFro} alt="error" id="sdimg" />
        <ul>
          <li>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeRoundedIcon style={{ marginRight: "10px" }} />
              Home
            </Link>
          </li>
          <li>
            <SearchRoundedIcon />
            Explore
          </li>
          <li>
            <NotificationsNoneRoundedIcon />
            Notifications
          </li>
          <li>
            <MessageRoundedIcon />
            Messages
          </li>
          <li>
            <TurnedInRoundedIcon />
            Bookmarks
          </li>
          <li>
            <MoreHorizRoundedIcon />
            More
          </li>
        </ul>
        <div className="pro">
          <div className="profile-info" onClick={toggleMenu}>
            <img src={profileImage} alt="error" id="bot" />
            <span>{username}</span>
            <MoreVertOutlinedIcon style={{ marginLeft: "40px" }} />
          </div>
          {showMenu && (
            <ul className="dropdown-menu1">
              <li onClick={handleLogout}>
                <LogoutRoundedIcon style={{ marginRight: "5px" }} />
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Profile Content */}
      <div className="profile">
        {/* Cover Profile */}
        <div className="cover-profile">
          {/* Profile Picture */}
          <div className="profile-picture">
            <img src={profileImage} alt={`${username}'s profile`} />
          </div>
          {/* User Details */}
          <div className="user-details">
            <h2>{username}</h2>
            <div className="stats">
              <div className="stat">
                <h3>{posts.length}</h3>
                <p>Posts</p>
              </div>
              <div className="stat">
                <h3>{followers}</h3>
                <p>Followers</p>
              </div>
              <div className="stat">
                <h3>{following}</h3>
                <p>Following</p>
              </div>
            </div>
            <p>{about}</p>
            <div className="profile-actions">
              <button type="button" id="eb">
                Edit Profile
              </button>
              <button type="button" id="eb" onClick={handleShareButtonClick}>
                Share Profile
              </button>
              {showShareOptions && (
                <div className="share-options">
                  <div className="share">
                    <ShareIcon />
                    Share via
                  </div>
                  <ul className="social-media-list">
                    <li>
                      <FacebookIcon />
                    </li>
                    <li>
                      <InstagramIcon />
                    </li>
                    <li>
                      <XIcon />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* User Posts */}
        <div className="profile-posts">
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
