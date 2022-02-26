import React from 'react'; 
import ReactDOM from 'react-dom';
//Phase 6:
//NOW we want our user to click on a house and see the border appear around our house of choice.
//we see on our css we have "selected"
//we want to update our className, we need to add an onClick, state, setState
//What is changing?
    //the selected house is changing
//where will this state live?
    //Hogwarts will own the state
    //we want to place state in the lowest parent element involved with all of the children

const House = (props) => {
  console.log('What are House props?:', props);
  let className= ''; //ADDED AFTER CONSTRUCTOR
  if (props.selectedHouse === props.name) className = 'selected'; //ADDED AFTER CONSTRUCTOR
  //add the onClick,
  //need to pass in function 
  return <li className={className} onClick={() => props.pickHouse(props.name)}>{props.name}</li> //ADDED AFTER CONSTRUCTOR
}


class Hogwarts extends React.Component {
  //build out the state we will add our constructor
  constructor() { //ADD
    super(); //ADD
    this.state = { 
      selectedHouse: '' //add this will start out as an empty string
    }
    //Now we have to bind this....this is done after our method
    this.pickHouse = this.pickHouse.bind(this);
  }
  //we also need to add a method to the house that we have picked
    //in order to call this we need to create an onClick
  pickHouse(house) {
    this.setState({
      selectedHouse: house
    })
  }

  render() {
    // in a class component, props comes in the form of `this.props`
    console.log('What are Hogwarts props?: ', this.props);
    console.log('What is Hogwarts state?:', this.state);
    return (
      <div>
        <h1>Which Hogwarts house are you?</h1>
        <ul>
          <House name="AngryBoba" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
          <House name="Gryffindor" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
          <House name="Hufflepuff" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
          <House name="Ravenclaw" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
          <House name="Slytherin" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Hogwarts />, document.getElementById('app'));
