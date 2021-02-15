import React, { Component } from 'react';
import Week from './Week.jsx';

// DELETE TEST.JSX BEFORE MERGING
// import Test from './Test.jsx';

class App extends Component {
  render(){
    
    return (
      <div>
        <h1>Starch</h1>
        {/* <Test /> */}
        {/* logout button */}
        <Week />
      </div>
    )
  }
  
}

// const style = {
//   container: {
//     display: 'grid'
//   },
//   // display: 'grid'
// }

export default App;