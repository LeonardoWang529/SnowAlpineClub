import React from "react";

class FooterComponent extends React.Component{

    render() {
        return (
            <footer className="text-muted" style={{margin:"50px"}}>
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Thank you very much to visit our website!</p>
                    <p>You can Connect with through Email <a href="https://getbootstrap.com/">Visit the homepage</a>
                        or visit our Store in San Fransisco.</p>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;