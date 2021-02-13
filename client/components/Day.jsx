import React, { useState } from 'react'

function Day(props) {

  console.log(props.dayOfWeek)
  return (
    <div id='day'>
      <h5>{props.dayOfWeek}</h5>
    </div>
  )
}

export default Day;
