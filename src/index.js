import foodCartTpl from './templates/food-card.hbs';
import menu from './menu.json';


const cardsMarkup = document.querySelector('.js-menu');

const foodCardsMarckup = foodCartTpl(menu);
cardsMarkup.insertAdjacentHTML("beforeend", foodCardsMarckup);






const cheacbox = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');
auditLocalStorage();


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

bodyColor.classList.add(Theme.LIGHT);


cheacbox.addEventListener('change', сhangesThemeOfWindow);



function сhangesThemeOfWindow(){
   if(bodyColor.classList.contains(Theme.LIGHT)){
    localStorage.setItem('body-color', JSON.stringify(Theme.DARK));
    cheacbox.checked = true;
    return bodyColor.classList.replace(Theme.LIGHT, Theme.DARK);
   }
   localStorage.setItem('body-color', JSON.stringify(Theme.LIGHT));
   cheacbox.checked = false;
   return bodyColor.classList.replace(Theme.DARK, Theme.LIGHT);
}



function auditLocalStorage(){

    
    const bodyClass = localStorage.getItem('body-color');
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      }; 

     if(bodyClass){
        bodyColor.classList.add(JSON.parse(bodyClass));

        if(JSON.parse(bodyClass) == Theme.DARK){
          cheacbox.checked = true;
        }
     }
}

