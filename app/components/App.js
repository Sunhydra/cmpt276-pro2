import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div id="wrapper" className="clearfix">
                <Header id="header" location={this.props.location}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
