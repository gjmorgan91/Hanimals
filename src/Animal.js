import React, { Component } from "react";
import "./index.css";

class Animal extends Component {
    getAnimal(name) {
        switch(name) {
            case('Shark'):
                return (<img src={require('./animal_images/shark_1.svg')} height="720px" viewBox="0 0 720 720"></img>);
                break;
            case('Rooster1'):
                return (<img src={require('./animal_images/rooster_1.svg')} height="720px" viewBox="0 0 720 720"></img>);
                break
            case('Slug2'):
                return (<img src={require('./animal_images/slug_2.svg')} height="720px" viewBox="0 0 720 720"></img>);
                break
            case('Moose1'):
                return (<img src={require('./animal_images/moose_1.svg')} height="720px" viewBox="0 0 720 720"></img>);
                break
            default:
                return '';
                break;
        }
    }

    setStyle() {
        return({
            fill: this.props.animal.color
        })
    }

    render() {
        return (
            <div className='animal' style={this.setStyle()}>
                {this.getAnimal(this.props.animal.name)}
            </div>
        );
    }
}

export default Animal;