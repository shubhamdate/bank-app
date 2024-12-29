import React, { useState, useEffect } from "react";

import {
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Settings } from "@mui/icons-material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import avt_1 from "../sidebar-logo/avt-1.png";


const Nav = (props) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    var isMobile;
    function getCurrentDimension() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  
    useEffect(() => {
      const updateDimension = () => {
        setScreenSize(getCurrentDimension());
      };
      window.addEventListener("resize", updateDimension);
  
      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }, [screenSize]);
  
    if (screenSize.width < 960) {
      isMobile = true;
    } else {
      isMobile = false;
    }
  
    return (
        <div
          style={{
            display: "flex",
            width: isMobile ? "100%" : "50%",
            justifyContent: "space-around",
          }}
          className="search-bar"
        >
          <TextField
            id="search"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Serach for somethings"
            sx={{
              borderRadius: "30px",
              backgroundColor: "#f3f4f5",
              MinWidth: "80%",
              maxWidth: "90%",
              border: "none",
              "& fieldset": { border: "none" },
            }}
          />
          <IconButton
            sx={{ backgroundColor: "#f3f4f5", width: "50px", height: "50px" }}
          >
            <Settings />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "#f3f4f5", width: "50px", height: "50px" }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar
            alt="Joe"
            src={avt_1}
            sx={{ width: 60, height: 60 }}
          />
        </div>
    );
};

export default Nav;