import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json"
import Wrapper from "./components/Wrapper.js"
import Navpills from "./components/Navpills"
import Title from "./components/Title"
import CharacterCard from "./components/CharacterCard"

class App extends Component {
	state = {
		message: "Click and image to begin!",
		topScore: 0,
		curScore: 0,
	}

	componentDidMount(){}

	//creates randomized array for characters
	shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--){
		let j = math.floor(math.random() *(i+1));
		[array[i], array[j]] = [array[j], array[i]];
		}
	}
}

export default App;
