import foodCartTpl from '../templates/food-card.hbs';
import menu from '../menu.json';


const cardsMarkup = document.querySelector('.js-menu');

const foodCardsMarckup = foodCartTpl(menu);
cardsMarkup.insertAdjacentHTML("beforeend", foodCardsMarckup);