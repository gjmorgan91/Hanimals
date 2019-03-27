import React, { Component } from "react";
import StickyNote from "./StickyNote";

class Canvas extends Component {
    render() {
        return (
            <div>
                <StickyNote color={this.props.color}
                    animal={this.props.animal}
                    hands={this.props.hands}
                ></StickyNote>
                {console.log('Canvas '+this.props.animal.body)}
            </div>
        );
    }
}

export default Canvas;