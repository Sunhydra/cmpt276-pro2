import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Messages from "./Messages";
import { create } from "../actions/tokimons";

class CreateTokimon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleChange(event) {
        if(event.target.name !== "name" && event.target.name !== "trainer"){
          if(!isNaN(event.target.value)){
                this.setState({ [event.target.name]: event.target.value });
          }
          if(isNaN(this.state.total)){
            this.setState({'total': event.target.value  });
          }
          else{
            this.setState({'total': Number(this.state.total)+Number(event.target.value)  });
          }
        }
        else{
              this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleCreateTokimon(event) {
        event.preventDefault();
        this.props.dispatch(
            create(
                this.state.name,
                this.state.trainer,
                this.state.weight,
                this.state.height,
                this.state.fly,
                this.state.fight,
                this.state.fire,
                this.state.water,
                this.state.electric,
                this.state.ice,
                this.state.total
            )
        );
    }

    render() {
        return (
            <div className="login-container container">
                <div className="content-wrap">
                    <div
                        className="panel-body divcenter"
                        style={{ maxWidth: "550px" }}>
                        <Messages messages={this.props.messages} />
                        <form onSubmit={this.handleCreateTokimon.bind(this)}>
                            <legend>Add a new Tokimon</legend>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    autoFocus
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Trainer</label>
                                <input
                                    type="text"
                                    name="trainer"
                                    id="trainer"
                                    placeholder="Trainer"
                                    className="form-control"
                                    value={this.state.trainer}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Weight</label>
                                <input
                                    type="number"
                                    name="weight"
                                    id="weight"
                                    placeholder="Weight"
                                    className="form-control"
                                    value={this.state.weight}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="occupation">Height</label>
                                <input
                                    type="number"
                                    name="height"
                                    id="height"
                                    placeholder="Height"
                                    className="form-control"
                                    value={this.state.height}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">Fly</label>
                                <input
                                    type="number"
                                    name="fly"
                                    id="fly"
                                    placeholder="Fly"
                                    className="form-control"
                                    value={this.state.fly}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Fight</label>
                                <input
                                    type="number"
                                    name="fight"
                                    id="fight"
                                    placeholder="Fight"
                                    className="form-control"
                                    value={this.state.fight}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Fire</label>
                                <input
                                    type="number"
                                    name="fire"
                                    id="fire"
                                    placeholder="Fire"
                                    className="form-control"
                                    value={this.state.fire}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Water</label>
                                <input
                                    type="number"
                                    name="water"
                                    id="water"
                                    placeholder="Water"
                                    className="form-control"
                                    value={this.state.water}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="electric">Electric</label>
                                <input
                                    type="number"
                                    name="electric"
                                    id="electric"
                                    placeholder="Electric"
                                    className="form-control"
                                    value={this.state.electric}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ice">Ice</label>
                                <input
                                    type="number"
                                    name="ice"
                                    id="ice"
                                    placeholder="Ice"
                                    className="form-control"
                                    value={this.state.ice}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Total</label>
                                <input
                                    type="number"
                                    name="total"
                                    id="total"
                                    placeholder="Total"
                                    className="form-control"
                                    value={this.state.total}
                                    disabled = "disabled"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Save new tokimon
                            </button>
                        </form>
                    </div>
                    <p className="text-center larger-text">
                        <Link to="/">
                            <strong>Discard and go back</strong>
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(CreateTokimon);
