import React, { Component } from "react";
import "./App.css";
import Canvas from "./Canvas";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newHanimal() {
    //make a call to the db to get a new animal and hands then update the board
    return 'yes';
  }

  showSaveUI() {
    //toggle the form for saving the hanimal to the library
    return 'yes';
  }

  newColor() {
    //generates a new color to be used as the sticky note and hanimal fill color or picks from a list
    return 'yes';
  }

  render() {
    return (
      <div className="App">
        <nav>
          <button onClick={this.newHanimal()}>
            Gimme Moar
          </button>
          <button>
            Library
          </button>
          <button onClick={this.showSaveUI()}>
            Save
          </button>
        </nav>
        <Canvas
          animal={'animalobject'}
          hands={'[hand, hand, hand]'}
          color={this.newColor()}
        ></Canvas>
        <footer>
          {/* Info about the project, link to the repo and all that jazz */}
        </footer>
      </div>
    );
  }
}

export default App;
