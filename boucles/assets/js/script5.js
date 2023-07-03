// Créer une variable "day" contenant une valeur aléatoire comprise entre 1 et 365.
// Dans la console afficher "Jour {x} de l'année.' tant que la valeur de "day" n'est pas atteinte.
// Quand la valeur de "day" est atteinte, afficher dans la console : 'Jour x atteint'.


let day = Math.floor(Math.random() * 365)


for(i = 0; i <= day; i++){
    if(i == day){
        console.log(`Jour ${i} atteint !`)
    }
    else {
        console.log(`Jour ${i} de l'année`);
    }
}

// while(i < day){
//     i++
//     i = day
//     console.log(`Jour ${day} atteint !`);
// }






