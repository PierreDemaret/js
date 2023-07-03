// exo 1
let textToDisplay = 'Les Sélecteurs'
document.getElementById('title').textContent = textToDisplay
// exo 2
console.log(document.getElementById('title'));
console.log(document.querySelector('.description'));
let li = document.getElementsByTagName('li')
for (i = 0; i < li.length; i++){
    let liContent = li[i].innerHTML;
    console.log(liContent);
}
// exo 3
let liElements = document.querySelectorAll('li')
let newContent = [
    '1- Javascript',
    '2- PHP',
    '3- Ruby',
    '4- Java',
    '5- Swift',
    '6- C#'
]
for (let i = 0; i < liElements.length; i++){
    liElements[i].textContent = newContent[i];
    }
// exo 4
let imageElement = document.querySelector('img')
let srcImageInput = document.getElementById('src_image')
let imageSource = imageElement.src
srcImageInput.value = imageSource
// exo 5
let spanElement = document.querySelector('span')
spanElement.classList.add('important')
// exo 6
let listElement = document.querySelector('ul li:nth-child(4)')
listElement.classList.add('red')
console.log(li);


