import React from "react";
import bimg from "../images/maintop.jpg";

class SubHeaderComponent extends React.Component{
    render() {
        return (
            <div>
                <section className="jumbotron text-center"
                         style={{width:'100%', height: '325px', backgroundImage: 'url(' + bimg + ')', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '50% 70%'}}>
                    <div className="container">
{/*                        <h1>Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply
                            skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>*/}

                    </div>
                </section>
            </div>
        )
    }

}

export default SubHeaderComponent;