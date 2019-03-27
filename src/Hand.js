import React, { Component } from "react";

class Hand extends Component {
    render() {
        return (
            <div>
                {this.props.hand.svg}
            </div>
        );
    }
}

export default Hand;