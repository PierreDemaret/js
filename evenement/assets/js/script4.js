let listContent = document.querySelectorAll('ul > li')
listContent.forEach(element => {
    element.onclick = () => {
        console.log(element.textContent);
    }
});