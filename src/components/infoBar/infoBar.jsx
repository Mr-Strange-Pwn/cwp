import React from 'react';
import onLineIcon from '../../icon/onlineIcon.png'
import closeIcon from '../../icon/closeIcon.png'

import './infoBar.css'

const InfoBar = ({room}) => {
    return (  
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onLineIcon} alt="onLine"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    );
}
 
export default InfoBar;
