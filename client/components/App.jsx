import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userData: '', 
    };
  }
  
  componentDidMount() {
    // fetch("http://localhost:3000/")
    //   .then(res => res.json())
    //   .then((data) => {
    //       this.setState({
    //         userData: data,
    //     })
    //   })
    //   .catch(err => console.log(err))   
  }

  render(){
    return (
      <div>
        <p>Working</p>
        <button><a href = '/meal'>Meal</a></button>
        <button><a href = '/ingredients'>Ingredients</a></button>
      </div>
    )
  }
  
}

export default App;