// 5
let lastname = document.querySelector('#lastname')
let firstname = document.querySelector('#firstname')
let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Nom :' + lastname.value)
    console.log('Prénom :' + firstname.value)
})
// 6
// highlight first input
let input = document.querySelector('#lastname')
input.addEventListener('focus', function(){
    input.style.backgroundColor = 'grey'
})
input.addEventListener('blur', function(){
    input.style.backgroundColor = 'white'
})
let input2 = document.querySelector('#firstname')
input2.addEventListener('focus', function(){
    input2.style.backgroundColor = 'grey'
})
input2.addEventListener('blur', function(){
    input2.style.backgroundColor = 'white'
})
//exo 7
let select = document.querySelector('select')
const eventClick = (event) => {
    console.log('value = ' + event.target.value);
}
select.addEventListener('change', eventClick)
