import React, { Component } from "react";
import "./index.css";

class Hand extends Component {
    getHand(num) {
        switch(num) {
            case("1"):
                return ( <img src={require('./hand_images/hand_1.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case("2"):
                return ( <img src={require('./hand_images/hand_2.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case("3"):
                return ( <img src={require('./hand_images/hand_3.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(4):
                return ( <img src={require('./hand_images/hand_4.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(5):
                return ( <img src={require('./hand_images/hand_5.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(6):
                return ( <img src={require('./hand_images/hand_6.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(7):
                return ( <img src={require('./hand_images/hand_7.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(8):
                return ( <img src={require('./hand_images/hand_8.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(9):
                return ( <img src={require('./hand_images/hand_9.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(10):
                return ( <img src={require('./hand_images/hand_10.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(11):
                return ( <img src={require('./hand_images/hand_11.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            case(12):
                return ( <img src={require('./hand_images/hand_12.svg')} width="280px" height="280px" viewBox="0 0 280 280"></img> );
                break;
            default:
                return '';
                break;
        }
    }

    className(index) {
        return 'hand '+index
    }

    setStyle(hand) {
        return ({
            top: hand.top,
            left: hand.left,
            transform: `rotateZ(${hand.rotation}deg`,
            scale: hand.scale
        });
    }

    render() {
        return (
            <div className={this.className(this.props.index)} style={this.setStyle(this.props)}>
                {(this.props.hand) ? this.getHand(this.props.hand.index) : ''}
            </div>
        );
    }
}

export default Hand;