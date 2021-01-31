import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
            <img
          className="footer__albumLogo"
          src='https://m.media-amazon.com/images/M/MV5BM2M1MzVkYWMtMjQ0YS00MmMwLTkyNzQtMmE3MzY2NThlZThmXkEyXkFqcGdeQXVyNDE0NTQ3NTM@._V1_.jpg'
          alt=''
        />
            </div>
            <div className="footer__songInfo">
            <h4>yeah</h4>
            <p>bhati</p>
          </div>

            <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PauseCircleOutlineIcon
            fontSize="large"
            className="footer__icon"
           />
           <SkipNextIcon className="footer__icon" />
           <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
                
            </div>

        </div>
    )
}

export default Footer
