export default function menuTab() {
    const contentGrbbr = document.querySelector('#content');
    const menuHeaderCrtr = document.createElement('h2');
    const menuArrCrtr = [];

    menuHeaderCrtr.id = "resHeader";
    menuHeaderCrtr.innerText = "Menu";

    contentGrbbr.appendChild(menuHeaderCrtr);

    for (let i = 0; i < 5; i++){
      menuArrCrtr.push(document.createElement('div'));
      contentGrbbr.appendChild(menuArrCrtr[i]).classList = "menuItems";
    }

    const menuItemGrbbr = document.querySelectorAll(".menuItems");
    menuItemGrbbr.forEach( e => {
      e.appendChild(document.createElement('p'));
      e.appendChild(document.createElement('img')); 
    });


    menuArrCrtr[0].children[0].innerText = "Prepare to embark on a prehistoric culinary adventure with our Ancient Brontodon Steak. This indulgent dish pays homage to the colossal size and strength of the mighty brontodon, bringing a taste of the ancient world to your plate.";
    menuArrCrtr[0].children[1].src = "/home/joe/repos/restaurant-page/src/ancient-brontodon.jpg";

    console.log(menuArrCrtr[1].children[1]);
  }

