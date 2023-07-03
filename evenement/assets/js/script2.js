let imgElement = document.querySelector('img')
let imgSrc = imgElement.getAttribute('src')
// imgElement.addEventListener('mouseover', () => {
//     console.log(imgSrc);
// })

const displaySrc = () => {
    console.log(imgSrc);
}
imgElement.addEventListener('mouseover', displaySrc)

