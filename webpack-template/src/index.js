import _ from 'lodash';
import './css/index.css';
import Img1 from './images/test1.png'
import Img2 from './images/test2.jpg'
import Logo from './images/logo.png'

function component() {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

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