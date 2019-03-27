import React, { Component } from "react";
import StickyNote from "./StickyNote";

class Canvas extends Component {
    render() {
        return (
            <div>
                <StickyNote color={this.props.color} >
                    animal={this.props.animal}
                    hands={this.props.hands}
                    color={this.props.color}>
                </StickyNote>
            </div>
        );
    }
}

export default Canvas;