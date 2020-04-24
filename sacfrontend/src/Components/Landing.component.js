import React from "react";
import bimg from "../images/maintop.jpg"

class LandingComponent extends React.Component{

    render() {
        return (
            <div className={"landingImgContianer"} >
            <img className={"landingImg"} src={bimg} />
            </div>
        )
    }

}

export default LandingComponent;