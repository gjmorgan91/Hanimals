import React, { Component } from "react";
import Animal from "./Animal";
import Hand from "./Hand";
import "./index.css";

class Hanimal extends Component {
    getHand(index) {
        return(
            <Hand  
                index={index} 
                hand={this.props.hands[index]}
                top={this.props.animal.hands[index].top}
                left={this.props.animal.hands[index].left}
                rotation={this.props.animal.hands[index].rotation}
                scale={this.props.animal.hands[index].scale}>
            </Hand>
        )
    }

    render() {
        return (
            <div className='hanimal'>
                <Animal
                    animal={this.props.animal}>
                </Animal>
                {(this.props.hands[0]) ? this.getHand(0) : ''}
                {(this.props.hands[1]) ? this.getHand(1) : ''}
                {(this.props.hands[2]) ? this.getHand(2) : ''}
                {(this.props.hands[3]) ? this.getHand(3) : ''}
            </div>
        );
    }
}

export default Hanimal;