import _ from 'lodash';
import './ghalta.css';
import loadMe from './page-load.js';
import menuTab from './menu.js';

//home tab
// loadMe();

//menu tab
//menuTab();

//tab logic
function openTab(evt, tabName) {
//function creates and adds the 3 tab buttons
// add event listeners for each button
//load associated function when clicked

  const contentGrabber = document.querySelector('#content');
  const bodyGrbbr = document.querySelector('body');
  const tabGroupCrtr = document.createElement('div');
  const homeTabCrtr = document.createElement('button');
  const menuTabCrtr = document.createElement('button');
  const contactTabCrtr = document.createElement('button');

  tabGroupCrtr.classList.add("tab");
  homeTabCrtr.classList.add('tabGroup');
  menuTabCrtr.classList.add('tabGroup');
  contactTabCrtr.classList.add('tabGroup');

  bodyGrbbr.insertBefore(tabGroupCrtr, contentGrabber);
  tabGroupCrtr.appendChild(homeTabCrtr);
  tabGroupCrtr.appendChild(menuTabCrtr);
  tabGroupCrtr.appendChild(contactTabCrtr);

  homeTabCrtr.innerText = "Home";
  menuTabCrtr.innerText = "Menu";
  contactTabCrtr.innerText = "Contact";


  const tabGroupGrbbr = document.querySelectorAll('.tabGroup');

  tabGroupGrbbr.forEach((e, index) => {
    e.addEventListener('click', f => {
      console.log(index);
      if (index == 0) {
        contentGrabber.innerHTML = "";
        contentGrabber.classList.remove('.menuStyle');
        loadMe();
      } else if (index == 1) {
        contentGrabber.innerHTML = "";
        contentGrabber.classList.remove('.firstPageStyle');
        menuTab();
      }
      // add contact page stuff here after
    });
  });

  }

  openTab();