import React, { Component } from "react";
import Animal from "./Animal";
import Hand from "./Hand";

class Hanimal extends Component {
    render() {
        return (
            <div>
               <Animal animal={this.props.animal}></Animal>
               {/* {this.props.hands.forEach(hand => {
                   return <Hand hand={hand}></Hand>
               })} */}
            </div>
        );
    }
}

export default Hanimal;