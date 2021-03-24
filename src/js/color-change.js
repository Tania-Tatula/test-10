import {variables, Theme} from './variables.js';


variables.bodyColor.classList.add(Theme.LIGHT);
auditLocalStorage();

variables.cheacBox.addEventListener('change', сhangesThemeOfWindow);


function auditLocalStorage(){ 
    const bodyClass = localStorage.getItem('body-color');

     if(bodyClass){
      variables.bodyColor.classList.add(JSON.parse(bodyClass));

        if(JSON.parse(bodyClass) == Theme.DARK){
          variables.cheacBox.checked = true;
        }
     }
};


function сhangesThemeOfWindow(){
   if(variables.bodyColor.classList.contains(Theme.LIGHT)){

    localStorage.setItem('body-color', JSON.stringify(Theme.DARK));
    variables.cheacBox.checked = true;

    return variables.bodyColor.classList.replace(Theme.LIGHT, Theme.DARK);

   }

   localStorage.setItem('body-color', JSON.stringify(Theme.LIGHT));
   variables.cheacBox.checked = false;

   return variables.bodyColor.classList.replace(Theme.DARK, Theme.LIGHT);

};