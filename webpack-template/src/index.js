import _ from 'lodash';
import './css/index.css';

import printMe from './print.js'

import Img1 from './images/test1.png'
import Img2 from './images/test2.jpg'
import Logo from './images/logo.png'

function component() {
  var element = document.createElement('div');
     var btn = document.createElement('button');
  
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
     btn.innerHTML = 'Click me and check the console!';
     btn.onclick = printMe;
  
     element.appendChild(btn);

  var myIcon = new Image();
  myIcon.src = Img1;
  element.appendChild(myIcon);
  
  var myIcon2 = new Image();
  myIcon2.src = Img2;
  element.appendChild(myIcon2);
  
  myIcon2 = new Image();
  myIcon2.src = Logo;
  element.appendChild(myIcon2);
  
  return element;
}

document.body.appendChild(component());