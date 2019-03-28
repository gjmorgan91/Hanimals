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
    console.log('Mounted');
    this.newHanimal();
  }

  async newHanimal() {
    console.log("Making new Hanimal");
    const response = await fetch("/api/createHanimal", {
      method: "GET"
    });

    let data = await response.json();

    console.log(data.hands);

    this.setState({
      animal: data.animal[0],
      hands: data.hands,
      color: this.newColor()
    }
    )
  }

  showSaveUI() {
    //toggle the form for saving the hanimal to the library
    return "yes";
  }

  newColor() {
    return `rgb(${Math.random()*200+55},${Math.random()*200+55},${Math.random()*200+55})`
  }

  render() {
    return (
      <div className="App">
        <nav>
          <button className='refresh' onClick={this.newHanimal}>Gimme Moar</button>
          {/* <button>Library</button> */}
          {/* <button onClick={this.showSaveUI}>Save</button> */}
        </nav>
        <Canvas 
          animal={this.state.animal}
          hands={this.state.hands}
          color={this.state.color}
        />{console.log('Hand states: '+this.state.hands)}
        <footer>
          {/* Info about the project, link to the repo and all that jazz */}
        </footer>
      </div>
    );
  }
}

export default App;
