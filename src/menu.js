export default function menuTab() {
    const contentGrbbr = document.querySelector('#content');
    const resHeaderCrtr = document.createElement('h2');
    const heroImgCrtr = document.createElement('img');
    const resDescCrtr = document.createElement('div');
    const paraResDescCrtr = document.createElement('p');

    resHeaderCrtr.id = "resHeader";
    resHeaderCrtr.innerText = "Ghalta's Primal Hunger";

    heroImgCrtr.id = "heroImg";
    heroImgCrtr.src = "/home/joe/repos/restaurant-page/src/Ghalta.jpg";

    resDescCrtr.id = "resDesc";
    paraResDescCrtr.textContent = "Here at Ghalta's we understand hunger, we always have. You want a fresh patty, crisp onions, juicy tomatoes...cut about |\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0| that thick right? But most importantly, we know, the ONIONS DON'T TOUCH THE TOMATOES.";

    contentGrbbr.appendChild(resHeaderCrtr);
    contentGrbbr.appendChild(heroImgCrtr);
    contentGrbbr.appendChild(resDescCrtr);
    resDescCrtr.appendChild(paraResDescCrtr);
  }

