import React, { Component } from "react";
import "./index.css";
import Canvas from "./Canvas";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      hands: [],
      color: ''
    };
    this.newHanimal = this.newHanimal.bind(this);
  }

  componentDidMount() {
    this.newHanimal();
  }

  async newHanimal() {
    console.log("Making new Hanimal");
    const response = await fetch("/api/createHanimal", {
      method: "GET"
    });

    let data = await response.json();
    //data.animal[0].body = require(data.animal[0].body);
    data.animal[0].body = require('./animal_images/shark_1.svg');

    data.hands[0].location = require('./hand_images/hand_1.svg');
    data.hands[1].location = require('./hand_images/hand_2.svg');
    // for (let i = 0; i < data.hands.length; i++) {
    //   data.hands[i].location = require(data.hands[i].location);
    // }

    console.log('Hands '+ data.hands);

    this.setState({
      animal: data.animal[0],
      hands: JSON.stringify(data.hands),
      color: this.newColor()
    }
    )
  }

  showSaveUI() {
    //toggle the form for saving the hanimal to the library
    return "yes";
  }

  newColor() {
    //generates a new color to be used as the sticky note and hanimal fill color or picks from a list
    return "yes";
  }

  render() {
    return (
      <div className="App">
        <nav>
          <button onClick={this.newHanimal}>Gimme Moar</button>
          <button>Library</button>
          <button onClick={this.showSaveUI}>Save</button>
        </nav>
        <Canvas
          animal={this.state.animal}
          hands={this.state.hands}
          color={this.state.color}
        />
        <footer>
          {/* Info about the project, link to the repo and all that jazz */}
        </footer>
      </div>
    );
  }
}

export default App;
