import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import logoFro from "./logoFro.png";
import spiderman from "./spiderman.jpg";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Color from "./Colour";
function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
            <HomeRoundedIcon />
            Home
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
            <img src={spiderman} alt="error" id="bot" />
            <span>spider_man55</span>
            <MoreVertOutlinedIcon style={{ marginLeft: "40px" }} />
          </div>
          {showMenu && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/profile"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleRoundedIcon style={{ marginRight: "5px" }} />
                  Profile
                </Link>
              </li>
              <li onClick={handleLogout}>
                <LogoutRoundedIcon style={{ marginRight: "5px" }} /> Logout
              </li>
            </ul>
          )}
        </div>
      </div>
      <Color />
    </div>
  );
}

export default Home;
