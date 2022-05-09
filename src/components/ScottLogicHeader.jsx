import React from "react";
import banner from '../assets/banner-pos.svg';

const ScottLogicHeader = (props) => {
    return (
        <div className="branding flex-center">
            <img id="banner" src={banner} alt="Scott-Logic banner"/>
            <div className="tagline" id="tagline">{props.tagline}</div>
        </div>
    )
}

export default ScottLogicHeader;
