import React from 'react'; //imports to use react
import ReactDOM from 'react-dom'; //imports to use reactDOM

//what do we need to update?
  //onClick, state, setState
//what is going to be changing?
  //the selected house will change
//where will the state live?
  //we generally want to place state in the lowest parent element involved with all of the children
  //Hogwarts will own the state


//i want to add a functional component and another house
const House = (props) => {
  console.log('what are House props?', props)
  let className=''
  //if a particular house is clicked on then it will say selected from here we will go to the render
  if (props.selectedHouse === props.name) className='selected'
  //added the onClick
  return <li className={className} onClick={() => props.pickHouse(props.name)}> {props.name}</li>
}


//build my class component to render
class Hogwarts extends React.Component {
  //build out the state, bind, and added our method
  constructor() {
    super();
    this.state = {
      selectedHouse: '' //this will start out as an empty string
    }
    //bind
    this.pickHouse = this.pickHouse.bind(this)
  }
  //need to add our method to the house we have picked
  pickHouse(house) {
    this.setState({
      selectedHouse: house
    })
  }


  render(){
    console.log('what are Hogwarts props', this.props)
    return(
      <div>
        <h1>Which Hogwarts house are you?</h1>
        <ul>
          <House name="HappyHouse" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse}  />
          <House name="Hufflepuff" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse}/>
          <House name="Ravenclaw" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse}/>
          <House name="Slytherin" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse}/>
          <House name="Gryffindor" pickHouse={this.pickHouse} selectedHouse={this.state.selectedHouse} />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Hogwarts />, document.getElementById('app')) //to see this in the DOM

