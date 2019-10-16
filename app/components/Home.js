import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { getAllTokimons } from "../actions/tokimons";

class Home extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            tokimonlist: {}
        };
        this.timer;
        //console.log(props);
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.props.dispatch(getAllTokimons());
    }
    componentDidUpdate(nextProps, nextState) {
        if (this.state.tokimonlist != this.props.tokimonlist) {
            this.setState({ tokimonlist: this.props.tokimonlist });

        }
    }
    render() {
      console.log(this.props.tokimonlist);
      var tokimons;
        if (this.props.tokimonlist &&
            this.props.tokimonlist.tokimonlist &&
            this.props.tokimonlist.tokimonlist.length > 0
        ) {
            //tokimons = JSON.stringify(this.props.tokimonlist);
            tokimons = this.props.tokimonlist.tokimonlist.map((tokimon, index) => {
                return (<div key={index}>Tokimon name: {tokimon.name} <Link to={"/tokimon/"+tokimon.Id}>View Details</Link></div>);
            });
        } else {
            tokimons = (
                <div className="row">
                    <p> No tokimon found </p>{" "}
                </div>
            );
        }
        return (
            <section id="content">
            <div><Link to="/create">New Tokimon</Link></div>
                <div className="content-wrap">
                  {tokimons}
                </div>
            </section>
        );
    }
}
Home.contextTypes = {
    router: React.PropTypes.object
};

const mapStateToProps = state => {
    return {
        messages: state.messages,
        tokimonlist: state.tokimonlist
    };
};

export default connect(mapStateToProps)(Home);
