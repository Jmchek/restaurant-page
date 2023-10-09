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
      let elementHolder = document.createElement('div');
      e.appendChild(elementHolder).appendChild(document.createElement('h2'));
      elementHolder.appendChild(document.createElement('p'));
      e.appendChild(document.createElement('img')); 
    });

    //item 1
    menuArrCrtr[0].children[0].children[0].innerText = "Ancient Brontodon Steak";
    menuArrCrtr[0].children[0].children[1].innerText = "Prepare to embark on a prehistoric culinary adventure with our Ancient Brontodon Steak. This indulgent dish pays homage to the colossal size and strength of the mighty brontodon, bringing a taste of the ancient world to your plate.";
    menuArrCrtr[0].children[1].src = "src/ancient-brontodon.jpg";

    //item 2
    menuArrCrtr[1].children[0].children[0].innerText = "Goring Ceratops Feast";
    menuArrCrtr[1].children[0].children[1].innerText = "A culinary adventure as epic as a battle in the Magic: The Gathering Arena, yep that's our Goring Ceratops Feast. This extraordinary dish takes inspiration from the fearsome Goring Ceratops, offering a taste of its power and majesty right at your table.";
    menuArrCrtr[1].children[1].src = "src/Goring-Ceratops.jpg";

    //item 3
    menuArrCrtr[2].children[0].children[0].innerText = "Skittering Heartstopper Salad";
    menuArrCrtr[2].children[0].children[1].innerText = "Experience a culinary adventure that captures the essence of excitement and danger with our Skittering Heartstopper Salad. This extraordinary dish takes inspiration from the stealthy and deadly Insect creature, offering a unique and flavorful dining experience.";
    menuArrCrtr[2].children[1].src = "src/Skittering-Heartstopperjpg";

    //item 4
    menuArrCrtr[3].children[0].children[0].innerText = "Sun-Crowned Hunters Flame-Grilled Chicken";
    menuArrCrtr[3].children[0].children[1].innerText = "Get ready to savor the untamed flavors of the wild with our Sun-Crowned Hunters Flame-Grilled Chicken. This extraordinary dish draws inspiration from the majestic and fiery essence of the Sun-Crowned Hunters, delivering a truly primal dining experience.";
    menuArrCrtr[3].children[1].src = "src/Sun-Crowned-Hunters.png";

    //item 5
    menuArrCrtr[4].children[0].children[0].innerText = "Wind Strider's Delight";
    menuArrCrtr[4].children[0].children[1].innerText = "Embark on a whimsical journey through the skies with our Wind Strider's Delight. This enchanting dessert captures the grace and elegance of the mystical Merfolk, offering a sweet and delightful experience for your palate.";
    menuArrCrtr[4].children[1].src = "src/Wind-Strider.jpg";
  }

