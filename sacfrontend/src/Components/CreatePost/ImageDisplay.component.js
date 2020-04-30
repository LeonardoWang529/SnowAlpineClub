import React from "react";

function ImageDisplay(props) {
    return(
        <div className={"container"}>
            <div className={"row"}>
                <img style={{maxWidth:200,height:200}} src={URL.createObjectURL(props.fs)}/>
                {/*<img src={this.props.fs[1]}/>
                <img src={this.props.fs[2]}/>*/}
            </div>
            <div className={"row"}>
                {/*<img src={this.props.fs[3]}/>
                <img src={this.props.fs[4]}/>
                <img src={this.props.fs[5]}/>*/}
            </div>
        </div>
    )
}

export default ImageDisplay;