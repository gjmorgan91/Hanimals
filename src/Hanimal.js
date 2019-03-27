import React, { Component } from "react";
import Animal from "./Animal";
import Hand from "./Hand";

class Hanimal extends Component {
    getHand(index) {
        if (this.props.hands[index]) {
            return (
                <Hand hand={this.props.hands[index]}></Hand>
            )
        }
        return
    }
    render() {
        return (
            <div>
                <Animal animal={this.props.animal}></Animal>
                <Hand hand={this.props.hands[0]}></Hand>
                {this.getHand(0)}
            </div>
        );
    }
}

export default Hanimal;