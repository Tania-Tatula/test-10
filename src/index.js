import foodCartTpl from './templates/food-card.hbs';
import menu from './menu.json';

const cardsMarkup = document.querySelector('.js-menu');

cardsMarkup.insertAdjacentHTML("beforeend", createFoodCardsMarckup(menu));

function createFoodCardsMarckup(menu){
    return menu.map(foodCartTpl).join('');
}
