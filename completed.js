import React from 'react';
import ReactDOM from 'react-dom';

// build a class component that renders an h1 tag with "Which hogwarts house are you?" and 4 list elements of houses

// a second way to create a React component: function
// functional components are mostly used (right now) as presentational components
// functional components DO NOT HAVE STATE.

/*
const HogwartsFunctional = () => {
  // inside of functional components, our "render" method is the return value.
  // we don't have any access to other methods in here outside of that.
  return (
  <div>
    <h1>Which Hogwarts house are you? FUNCTIONAL</h1>
    <ul>
      <li>Gryffindor</li>
      <li>Hufflepuff</li>
      <li>Ravenclaw</li>
      <li>Slytherin</li>
    </ul>
  </div>
  );
}
*/
// 2 different components and Hogwarts is the parent of House
// if only there were a special property/object where we can receive an argument of different data to render in our functional component
// props -> an object that exists on ALL components (functional AND class) that contains key value pairs that parents PASS DOWN to children. When parents change those key value pairs, our children will re-render.

// in a functional component, this props (short for properties) object is the 1st and only argument of our function
const House = (props) => {
  console.log('What are House props?:', props);
  let className= '';
  if (props.selectedHouse === props.name) className = 'selected';
  return <li className={className} onClick={() => props.pickHouse(props.name)}>{props.name}</li>
}

// event => props.pickHouse(event)


// We want our user to click on a house and see the border appear around our house of choice.
// What do we have to do in order to change our list element's class name?
// onClick
// state, setState
// What is our state? What is changing?
  // the selectedHouse is changing
// place state in the lowest parent element involved with all the children

// A parent "passes down props" by adding attribute-like key value pairs to the component itself
class Hogwarts extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedHouse: ''
    }
    this.pickHouse = this.pickHouse.bind(this);
  }

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
