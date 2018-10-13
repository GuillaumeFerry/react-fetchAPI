import React, { Component } from 'react';
import './App.css';

import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';


class App extends Component {

  state = {
    employee: []
  };

  componentDidMount() {
    
      // Récupération de l'employé via fetch
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=01")
        .then(response  =>  response.json())
        .then(data  => {
          // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
          this.setState({
            employee:  data[0],
          });
      });
    
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=01")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.employee && <DisplayEmployee  employee={this.state.employee}  />}
          <GenerateEmployee selectEmployee={() =>  this.getEmployee()} />
        </header>
      </div>
    );
  }
}

export default App;
