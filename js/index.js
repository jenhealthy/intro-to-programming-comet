let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');
let copyright = document.createElement('p');
//inserting copyright text in footer
footer.innerHTML = 'Jen ' + thisYear;
document.body.appendChild(copyright);

//add skills section
let skills = ['HTML', 'CSS', 'JavaScript'];
let skillsSection = document.querySelector('#skills');
let skillsList = document.querySelector('#skills ul');

//create list of skills
    for(let i = 0; i < skills.length; i++) {
        let skill = document.createElement('li');
          skill.innerHTML = skills[i];
          skillsList.appendChild(skill);
    } 

//display messages in list
const messageSection =  document.querySelector('#messages');
const messageSelection = messageSection.querySelector('ul');


//handle message form submit
const messageForm = document.querySelector('form[name="leave_message"]');
console.log(messageForm);

const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const submit = document.querySelector('button[type="submit"]');
console.log(submit);

submit.addEventListener('click', submitButton) 

//callback function
function submitButton (e) {
  e.preventDefault();
  //display messages in list
 const item = document.createElement('li');
  item.innerHTML = `<a href="mailto:${email.value}">${name.value}</a><span>${textarea.value}</span>`
    messageSelection.appendChild(item);
  const removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', deleteItem) 
    item.appendChild(removeButton);

  //log the values of e, name, email, and text area
  console.log(e);
  console.log(name.value);
  console.log(email.value);
  console.log(textarea.value);
  
  //clears the form
  messageForm.reset();
}

//create the deleteItem function
function deleteItem (e) {
  e.target.parentNode.remove();
}



