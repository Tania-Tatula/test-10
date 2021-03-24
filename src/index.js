import foodCartTpl from './templates/food-card.hbs';
import menu from './menu.json';


const cardsMarkup = document.querySelector('.js-menu');

const foodCardsMarckup = foodCartTpl(menu);
cardsMarkup.insertAdjacentHTML("beforeend", foodCardsMarckup);






const cheacbox = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

bodyColor.classList.add(Theme.LIGHT);

console.log(bodyColor);
cheacbox.addEventListener('change', сhangesThemeOfWindow )



  function сhangesThemeOfWindow(){
   if(bodyColor.classList.contains(Theme.LIGHT)){
   
    bodyColor.classList.remove(Theme.LIGHT);
    return bodyColor.classList.add(Theme.DARK);
   }

   bodyColor.classList.remove(Theme.DARK);
   return bodyColor.classList.add(Theme.LIGHT);
  }



  
  