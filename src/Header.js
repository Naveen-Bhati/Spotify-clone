import React from "react";
import "./Header.css";
// import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header() {
    return (
        <div className="header">
             <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt='NB' src=''/>
        <h4>Naveen Bhati</h4>
      </div>
            
        </div>
    )
}

export default Header
