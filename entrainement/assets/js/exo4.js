'use strict';
// variables

let userBlockEl = document.querySelector('#userBlock');
let createRow = document.createElement('div');
let addButton = document.querySelector('.btn');
let submitBtn = document.querySelector('#submit-btn');
let form1 = document.querySelector('#form1');
let count = 0;
let sendButton = document.querySelector('#submit-btn');

let nameId = document.getElementById('name0');
let firstNameId = document.getElementById('firstname0');
let emailId = document.getElementById('email0');

const addUser = () => {
  let copyUserBlockEl = userBlockEl.cloneNode(true);
  count += 1;
  // console.log(copyUserBlockEl);
  // boucle pour label
  let userLabelEls = copyUserBlockEl.querySelectorAll('label');
  userLabelEls.forEach((label) => {
    // console.log(label.htmlFor
    let labelFor = label.htmlFor;
    if (labelFor == 'name0') {
      label.htmlFor = `name${count}`;
    } else if (labelFor == 'firstname0') {
      label.htmlFor = `firstname${count}`;
    } else if (labelFor == 'email0') {
      label.htmlFor = `email${count}`;
    }
  });
  // boucle pour input ID
  let userInputEls = copyUserBlockEl.querySelectorAll('input');
  // console.log(userInputEls);
  userInputEls.forEach((input) => {
    input.value = '';
    // console.log(input);
    let inputId = input.id;
    if (inputId == 'name0') {
      input.id = `name${count}`;
      // console.log(input.id);
    } else if (inputId == 'firstname0') {
      input.id = `firstname${count}`;
    } else if (inputId == 'email0') {
      input.id = `email${count}`;
    }

    // boucle pour input name
    let userInputNamesEls = copyUserBlockEl.querySelectorAll('input');
    userInputNamesEls.forEach((input) => {
      let inputName = input.name;
      if (inputName == 'name0') {
        input.name = `name${count}`;
      } else if (inputName == 'firstName0') {
        input.name = `firstname${count}`;
      } else if (inputName == 'email0') {
        input.name = `email${count}`;
      }
    });
  });
  form1.insertBefore(copyUserBlockEl, submitBtn);
};

// Fonction pour récuperer la liste des invités

const sendForm = (event) => {
  event.preventDefault();
  let invitationList = document.getElementById('invitationList');
  let invitation = document.getElementById('invitation');
  if (invitationList) {

    invitation.removeChild(invitationList);
    console.log(invitationList);
  }

  let users = [];
  let userBlockEls = document.querySelectorAll('#userBlock');
  userBlockEls.forEach((userBlock) => {
    // console.log(userBlock);
    let valuesInputs = userBlock.querySelectorAll('input');
    let user = {
      name: valuesInputs[0].value,
      firstname: valuesInputs[1].value,
      email: valuesInputs[2].value,
    };
    users.push(user);})

    // affichage de la liste des invités
    let ulEl = document.createElement('ul');
    ulEl.id = 'invitationList';
    users.forEach((user) => {
      let userLi = document.createElement('li');
      userLi.textContent =
        user.firstname + ' ' + user.name.toUpperCase() + ' ' + user.email;
      ulEl.appendChild(userLi);
    });
    invitation.appendChild(ulEl);
  
};

addButton.addEventListener('click', addUser);
sendButton.addEventListener('click', sendForm);
