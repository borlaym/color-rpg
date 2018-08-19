import * as React from 'react';
import './App.css';
import getAllCharacters from './utils/CharacterParser';

const characters = getAllCharacters();
global.console.log(characters)

class App extends React.Component {
  public render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
