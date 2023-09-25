import _ from 'lodash';
import './ghalta.css';
import loadMe from './page-load.js';
// import contentGrbbr from './page-load.js';
// import './page-load.js';

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = loadMe;

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());

 const contentGrbbr = document.querySelector('.content');

 console.log(contentGrbbr);

