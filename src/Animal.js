import React, { Component } from "react";

class Animal extends Component {
    render() {
        return (
            <div>                
                <img src={this.props.animal.body} ></img>
            </div>
        );
    }
}

export default Animal;