import React, { Component } from "react";
import Hanimal from "./Hanimal";

class StickyNote extends Component {
    render() {
        return (
            <div>
                <Hanimal 
                    animal={this.props.animal}
                    hands={this.props.hands}
                    color={this.props.color}>
                </Hanimal>
            </div>
        );
    }
}

export default StickyNote;