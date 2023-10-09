export default function contactTab() {
    const contentGrbbr = document.querySelector('#content');
    const menuHeaderCrtr = document.createElement('h2');
    const menuArrCrtr = [];

    menuHeaderCrtr.id = "resHeader";
    menuHeaderCrtr.innerText = "Contact";

    contentGrbbr.appendChild(menuHeaderCrtr);

    for (let i = 0; i < 3; i++){
      menuArrCrtr.push(document.createElement('div'));
      contentGrbbr.appendChild(menuArrCrtr[i]).classList = "menuItems";
    }

    const menuItemGrbbr = document.querySelectorAll(".menuItems");
    menuItemGrbbr.forEach( e => {
      let elementHolder = document.createElement('div');
      e.appendChild(elementHolder).appendChild(document.createElement('h2'));
      elementHolder.appendChild(document.createElement('p'));
      e.appendChild(document.createElement('img')); 
    });

    //item 1
    menuArrCrtr[0].children[0].children[0].innerText = "Huatli, the Sun's Heart";
    menuArrCrtr[0].children[0].children[1].innerText = "Chef \n 555-555-5555 \n dinosrule@ixalan.com";
    menuArrCrtr[0].children[1].src = "src/Huatli-Heart-of-the-Sun-War-of-the-Spark-Art.jpg";

    //item 2
    menuArrCrtr[1].children[0].children[0].innerText = "Angrath, the Flame-Chained";
    menuArrCrtr[1].children[0].children[1].innerText = "Manager \n 555-555-5555 \n discardintogy@ixalan.com";
    menuArrCrtr[1].children[1].src = "src/Angrath-Minotaur-Pirate-Rivals-of-Ixalan-MtG-Art.jpg";

    //item 3
    menuArrCrtr[2].children[0].children[0].innerText = "Vraska, Golgari Queen";
    menuArrCrtr[2].children[0].children[1].innerText = "Hostess \n 555-555-5555 \n niceperm@ixalan.com";
    menuArrCrtr[2].children[1].src = "src/Vraska-Scheming-Gorgon-Rivals-of-Ixalan-MtG-Art.png";
}