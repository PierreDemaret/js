let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let gras = days.splice(5, 2, 'Samedi(gras)', 'Dimanche(gras)')
console.log(days.join())
