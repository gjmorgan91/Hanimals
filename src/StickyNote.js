import React, { Component } from "react";
import Hanimal from "./Hanimal";
import "./index.css";

class StickyNote extends Component {
    render() {
        return (
            <div className='sticky'>
                <Hanimal
                    animal={this.props.animal}
                    hands={this.props.hands}
                    color={this.props.color}>
                </Hanimal>
                {console.log('Sticky '+this.props.hands)}
            </div>
        );
    }
}

export default StickyNote;