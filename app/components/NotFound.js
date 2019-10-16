import React from "react";

const NotFound = props => {
    return (
        <section>
            <section id="page-title">
                <div className="container clearfix">
                    <h1>Page Not Found</h1>
                </div>
            </section>

            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="col_half nobottommargin">
                            <div className="error404 center">404</div>
                        </div>

                        <div className="col_half nobottommargin col_last">
                            <div className="heading-block nobottomborder">
                                <h4>Ooopps...! Page Not Found</h4>
                            </div>

                            <div className="col_one_third widget_links topmargin nobottommargin">
                                <ul>
                                    <li>
                                        <i className="icon-play" />
                                        <a href="/">Back to Home</a>
                                        <br/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default NotFound;
