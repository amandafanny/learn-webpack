import Print from './print';
import _ from 'lodash';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    element.onclick = Print.bind(null, 'Hello webpack!');
    return element;
  }
  
  document.body.appendChild(component());