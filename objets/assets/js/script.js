// exo 1 création d'un objet comportant plusieurs propriété
let user1 = {
    lastname : 'Musk',
    firstname : 'Elon',
    age : 51,
    phone : '0422521010',
    birthdate : '1971-06-28',
}
console.log(user1);

// exo 2 modifier num. tel
Object.defineProperty(user1, 'phone', {
    value : '415-222-9670'
})
console.log(user1);

// exo 3 Supprimer la valeur de la propriété "age".
user1.age = null
console.log(user1);

// exo 4 Supprimer la propriété "age".
delete user1.age
console.log(user1);

// exo 5 Créer un tableau dans une constante
const arrayName = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa']
user1.children = arrayName
console.log(user1);

//exo 6 ajouter la propriété "getFullName" contenant la fonction créée précédement.
function getFullName(){
    return this.firstname+ ' ' +this.lastname
}
Object.defineProperty(user1, 'getFullName', {
    get : getFullName
})

// exo 7 Créer un nouvel objet "user2"
let user2 = {
    lastname : 'Demaret',
    firstname : 'Pierre',
    age : 28,
    phone : '0465768798',
    birthdate : '1994-11-22',
    children : null,
    getFullName : getFullName
}

const users = [user1, user2]
console.log(users);

// exo 8 afficher le nom complet de chaque utilisateur dans le tableau, ainsi que la liste de tous les enfants entre parenthèses et séparés par des '-'
Object.defineProperty(user2, 'getFullName', {
    get : getFullName
})
console.log(user1.getFullName)
console.log(user2.getFullName)

const nameStyle = arrayName.map(name => `(${name})`).join('-')
arrayName.forEach(name => {
    console.log(nameStyle);
});
