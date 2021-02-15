import React from 'react'
import Day from './Day.jsx'

function Test(props) {
  
//   const arrOfDays = [];
//   for (let i = 0; i < 7; i++) {
    
//     arrOfDays.push( 
//     <Day key={i}  />
 
//     )
//   }

  return (
    <div>
      <div className="container">
        <h1>Grid</h1>   
        <div className="row">
          <div className="col-sm-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="col-sm-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.    
          </div>
        </div>
      </div>
   </div>
  )
}

export default Test;
