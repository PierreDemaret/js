// Créer deux variables "firstNumber" et "secondNumber". Leur donner une valeur comprise entre 1 et 10. Tant que le résultat de la multiplication des deux nombres est inférieur à 250:
// Afficher le résultat dans la console.
// Assigner le résultat à secondNumber


let firstNumber = 5
let secondNumber = 5

while (firstNumber * secondNumber < 250) {
  console.log(firstNumber * secondNumber);
  secondNumber = firstNumber * secondNumber
}

console.log("Le résultat final est : " + secondNumber)
