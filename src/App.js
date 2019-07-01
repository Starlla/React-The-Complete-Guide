import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Tom', age:26},
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = (newname) =>{
    //console.log('Was clicked!');
    // Don't: this.state.persons[0].name = 'Maximilian';
    this.setState({persons:[
      {name:newname, age:28},
      {name:'Manu', age:29},
      {name:'Tom', age:26},
    ]})
  }

  nameChangedHandler =(event) => {
    this.setState({
      persons:[
        {name:'Max', age:28},
        {name:event.target.value, age:29},
        {name:'Tom', age:26},
      ]
    })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return <Person name = {person.name}
                            age = {person.age} />
          })}
        
        </div> 
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App! </h1>
        <p>This is really working!</p>
        <button
          style = {style}  
          onClick ={this.togglePersonHandler} >Toggle Persons</button>
        {persons}
      </div>   
    );
    // return React.createElement('div', {className: 'Appp'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

