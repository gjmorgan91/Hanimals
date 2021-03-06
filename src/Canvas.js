import React, { Component } from "react";
import StickyNote from "./StickyNote";
import "./index.css";

class Canvas extends Component {
    render() {
        return (
            <div className='canvas'>
                <StickyNote
                    color={this.props.color}
                    animal={this.props.animal}
                    hands={this.props.hands}
                ></StickyNote>
                <button className='refresh' onClick={this.props.refresh}>Another!</button>
                {console.log('Canvas '+this.props.hands)}
            </div>
        );
    }
}

export default Canvas;