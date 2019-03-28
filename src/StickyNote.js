import React, { Component } from "react";
import Hanimal from "./Hanimal";
import "./index.css";

class StickyNote extends Component {
    setStyle() {
        return({
            'background-color': this.props.color
        })
    }

    render() {
        return (
            <div className='sticky_container'>
                <div className='sticky' style={this.setStyle()}>
                    <Hanimal
                        animal={this.props.animal}
                        hands={this.props.hands}
                        color={this.props.color}>
                    </Hanimal>
                    {console.log('Sticky '+this.props.hands)}
                </div>
            </div>
        );
    }
}

export default StickyNote;