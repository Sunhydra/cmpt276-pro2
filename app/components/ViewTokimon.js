import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {
    get,
    update,
    deleteOne
} from "../actions/tokimons";
import Messages from "./Messages";

class Tokimon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Id: 0,
          name: "",
          trainer: "",
          weight: 0,
          height: 0,
          fly: 0,
          fight: 0,
          fire: 0,
          water: 0,
          electric: 0,
          ice: 0,
          total: 0
        };
    }
    handleDetele(){
      this.props.dispatch(deleteOne(this.props.params.id));
    }
    componentDidMount() {
        this.props.dispatch(get(this.props.params.id));
      }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.Id != this.props.tokimonlist.tokimonlist.Id) {
      console.log(this.props.tokimonlist);
      this.setState({
        name: this.props.tokimonlist.tokimonlist.name,
         Id: this.props.tokimonlist.tokimonlist.Id,
         trainer:  this.props.tokimonlist.tokimonlist.trainer,
         weight:  this.props.tokimonlist.tokimonlist.weight,
         height:  this.props.tokimonlist.tokimonlist.height,
         fly:  this.props.tokimonlist.tokimonlist.fly,
         fight:  this.props.tokimonlist.tokimonlist.fight,
         fire:  this.props.tokimonlist.tokimonlist.fire,
         water:  this.props.tokimonlist.tokimonlist.water,
         electric:  this.props.tokimonlist.tokimonlist.electric,
         ice:  this.props.tokimonlist.tokimonlist.ice,
         total:  this.props.tokimonlist.tokimonlist.total
       });
    }
  }

    render() {

        return (
            <section id="content" className="profile">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="row clearfix">
                        <h2>{this.state.name}</h2>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <div
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    autoFocus
                                    className="form-control"
                                    value={this.state.name}
                                  disabled = "disabled"
                                >{this.state.name}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Trainer</label>
                                <div
                                    type="text"
                                    name="trainer"
                                    id="trainer"
                                    placeholder="Trainer"
                                    className="form-control"
                                    value={this.state.trainer}
                                    disabled = "disabled"
                                >{this.state.trainer}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Weight</label>
                                <div
                                    type="number"
                                    name="weight"
                                    id="weight"
                                    placeholder="Weight"
                                    className="form-control"
                                    value={this.state.weight}
                                    disabled = "disabled"
                                >{this.state.weight}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="occupation">Height</label>
                                <div
                                    type="number"
                                    name="height"
                                    id="height"
                                    placeholder="Height"
                                    className="form-control"
                                    value={this.state.height}
                                    disabled = "disabled"
                                >{this.state.height}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">Fly</label>
                                <div
                                    type="number"
                                    name="fly"
                                    id="fly"
                                    placeholder="Fly"
                                    className="form-control"
                                    value={this.state.fly}
                                    disabled = "disabled"
                                >{this.state.fly}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Fight</label>
                                <div
                                    type="number"
                                    name="fight"
                                    id="fight"
                                    placeholder="Fight"
                                    className="form-control"
                                    value={this.state.fight}
                                    disabled = "disabled"
                                >{this.state.fight}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Fire</label>
                                <div
                                    type="number"
                                    name="fire"
                                    id="fire"
                                    placeholder="Fire"
                                    className="form-control"
                                    value={this.state.fire}
                                    disabled = "disabled"
                                >{this.state.fire}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Water</label>
                                <div
                                    type="number"
                                    name="water"
                                    id="water"
                                    placeholder="Water"
                                    className="form-control"
                                    value={this.state.water}
                                    disabled = "disabled"
                                >{this.state.water}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="electric">Electric</label>
                                <div
                                    type="number"
                                    name="electric"
                                    id="electric"
                                    placeholder="Electric"
                                    className="form-control"
                                    value={this.state.electric}
                                    disabled = "disabled"
                                >{this.state.electric}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ice">Ice</label>
                                <div
                                    type="number"
                                    name="ice"
                                    id="ice"
                                    placeholder="Ice"
                                    className="form-control"
                                    value={this.state.ice}
                                    disabled = "disabled"
                                >{this.state.ice}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Total</label>
                                <div
                                    type="number"
                                    name="total"
                                    id="total"
                                    placeholder="Total"
                                    className="form-control"
                                    value={this.state.total}
                                    disabled = "disabled"
                                >{this.state.total}</div>
                            </div>
                            <Link to={"/update/"+this.state.Id} className="btn btn-success">
                                Update Tokimon
                            </Link>
                            <Link to={"#"} className="btn btn-warning" onClick={this.handleDetele.bind(this)}>
                                DELETE Tokimon
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        tokimonlist: state.tokimonlist,
        messages: state.messages
    };
};

export default connect(mapStateToProps)(Tokimon);
