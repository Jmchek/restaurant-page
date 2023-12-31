import _ from 'lodash';
import './ghalta.css';
import loadMe from './page-load.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

function openTab() {

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
      if (index == 0) {
        contentGrabber.innerHTML = "";
        loadMe();
      } else if (index == 1) {
        contentGrabber.innerHTML = "";
        menuTab();
      } else if (index == 2) {
        contentGrabber.innerHTML = "";
        contactTab();
      }
    });
  });

  }
  
  loadMe();
  openTab();