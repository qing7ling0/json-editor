'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import TextDemo from './textDemo'

ReactDOM.render(
  <div>
    <button onClick={()=> {
      window.open('./textDemo.html')
    }}>Demo</button>
  </div>,
  document.getElementById('root')
);