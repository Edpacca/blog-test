import React from "react";

const Header = (props) => {
    return (
        <div className="branding flex-center">
            <img className="banner" id="banner" src={props.banner} alt="banner"/>
            {   
                props.tagline &&
                <div className="tagline" id="tagline">{props.tagline}</div>
            }
        </div>
    )
}

export default Header;
