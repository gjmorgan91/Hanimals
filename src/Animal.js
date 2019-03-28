import React, { Component } from "react";
import "./index.css";

class Animal extends Component {
    getAnimal(name) {
        switch(name) {
            case('Shark'):
                return (<img src={require('./animal_images/shark_1.svg')} height="720px" viewBox="0 0 720 720"></img>);
                break;
            default:
                return '';
                break;
        }
    }

    render() {
        return (
            <div className='animal'>
                {this.getAnimal(this.props.animal.name)}
            </div>
        );
    }
}

export default Animal;