
import React, { Component } from 'react';


class BasicInfo extends Component {
  render() {
    return (
    <div>
      <p>Name: {this.props.person.name}</p>
      <p>Number: {this.props.person.number}</p>
      <p>Date of Birth: {this.props.person.dob}</p>
    </div>
    )
  }
  
}

 class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
        name: 'Cristian',
        number: '123-456-7890',
        dob: '05/10/1999',
      },
       {
        name: 'Mike',
        number: '123-543-7890',
        dob: '02/10/2000',
      },
      {
      name: 'Terry',
      number: '123-456-7890',
      dob: '06/9/1989',
    },
    {
      name: 'Sam',
      number: '432-098-7890',
      dob: '09/18/1999',
    },
    ]
    };
  }

  render() {
    return (
      this.state.person.map((person, i) => (
        <BasicInfo key={i} person={person} />
      ))
    );
  }
}

export default App;





//   VERY EASY: Inside of your ‘App’ class ‘render’ method, return 
//a div with your basic information for example name, number, date of
// birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

// Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set 
//‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ 
//create a ‘person’ property and set it to an empty object


//: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.
//  Then take the returned ‘div’ and create a component, pass state into it and import it as 
//‘BasicInfo’. (This challenge should not change the look of the page)

//HARD: Now that you have a basic react app to display one person’s worth of information, now modify
// the app to iterate over an array of people’s basic information, while still keeping the new list of 
//contacts in the top-level of state. (Optional: add styling to space out each person’s info)
