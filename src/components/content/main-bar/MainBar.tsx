import React from "react";


import CloseIcon from '@mui/icons-material/Close';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./MainBar.css";
import Posts from "../posts/Posts";

export default function MainBar() {
  return (
    <div className="main-bar">
      <div className="update-card">
        <div className="top-section">
          <span>UPDATES FROM REDDIT</span>
           <CloseIcon className="hoverable" /> 
        </div>
        <div className="body hoverable">
          <div className="context">
            <span className="title">Keep yourself safe and informed</span>
            <br />
            <span className="description">Visit r/Coronavirus to talk about COVID-19, and visit www.who.int for more information.</span>
          </div>
          <img src="./assets/images/pin.jpg" />
          
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-element hoverable">
           <WhatshotIcon /> 
          <span>Hot</span>
        </div>
        <div className="filter-element hoverable">
          <span>Everywhere</span>
           <ArrowDropDownIcon /> 
        </div>
        <div className="filter-element-secondary hoverable">
           <NewReleasesIcon /> 
          <span>New</span>
        </div>
        <div className="filter-element-secondary hoverable">
           <TrendingUpIcon /> 
          <span>Top</span>
        </div>
         <MoreHorizIcon className="filter-element-tertiary hoverable" /> 
        <div className="spacer"></div>
        <div className="filter-element-menu hoverable">
           <MenuIcon />
          <ArrowDropDownIcon /> 
        </div>
        </div>

      <Posts />  
    </div>  
  );
}
