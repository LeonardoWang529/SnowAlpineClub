import React from "react";

class SiderBarCategoriesComponent extends React.Component{



    render() {
        return (
            <li><button className={"siderbarItem"} onClick={() => this.props.clickhandle(this.props.catname)}>{this.props.catname}</button></li>
        )
    }

}

export default SiderBarCategoriesComponent;