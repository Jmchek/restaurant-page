export default function loadMe() {
    const contentGrbbr = document.querySelector('.content');
    const resHeaderCrtr = document.createElement('h2');
    const heroImgCrtr = document.createElement('img');

    resHeaderCrtr.id = "resHeader";
    resHeaderCrtr.innerText = "Ghalta's Primal Hunger";

    heroImgCrtr.id = "heroImg";
    heroImgCrtr.src = "/home/joe/repos/restaurant-page/src/Ghalta.jpg";

    contentGrbbr.appendChild(resHeaderCrtr);
    contentGrbbr.appendChild(heroImgCrtr);
  }

