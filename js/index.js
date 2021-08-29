let today = new Date();
let thisYear = today.getFullYear();
//fetch Github Repositories
const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/jenhealthy/repos"); 
githubRequest.send();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

//handle response from server
githubRequest.addEventListener("load", gitHandler);

function gitHandler(e){
  //serverside you parse the data into object
  const repositories = JSON.parse(this.response);
  const projectList = document.querySelector('#projects');
  //display repositories in list
  const ulElement = projectList.querySelector('ul')
  //stretch goals
  for(let i=0; i < repositories.length; i++){
    let project = document.createElement('li');
    project.innerHTML = `<a href= ${repositories[i].html_url}>${repositories[i].name}</a>`;
    ulElement.appendChild(project);
    let newList = document.createElement('ul');
    project.appendChild(newList);
    let projectDescription = document.createElement('li');
    projectDescription.innerText = repositories[i].description;
    newList.appendChild(projectDescription);
    //stretch goals to display additional information about repositories such as date 
    let projectDate = document.createElement('li');
    let createDate = new Date(Date.parse(repositories[i].created_at));
    projectDate.innerText = createDate.getMonth() + "/" + createDate.getDate() + "/" + createDate.getFullYear()
      + " " + createDate.getHours() + ":" + createDate.getMinutes();
    //projectDate.innerText = createDate.toDateString();
    newList.appendChild(projectDate);
  }
}

//inserting copyright text in footer
footer.innerHTML = 'Created by Jen Huynh ' + thisYear;
document.body.appendChild(copyright);

//add skills section
let skills = ['Critical Thinker', 'Problem Solver', 'Good Communication'];
let skillsList = document.getElementsByClassName('skills');
console.log("mySkillsListis", skillsList);

//create list of skills
    for(let i = 0; i < skills.length; i++) {
        let skill = document.createElement('li');
          skill.innerHTML = skills[i];
          skillsList[0].appendChild(skill);
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



