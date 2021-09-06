let today = new Date();
let thisYear = today.getFullYear();

// githubRequest.send();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

//inserting copyright text in footer
footer.innerHTML = "Created by Jen Huynh " + thisYear;
document.body.appendChild(copyright);

// function gitHandler(e) {
//add skills section
let skills = ["Critical Thinker", "Problem Solver", "Good Communication"];
let skillsList = document.getElementsByClassName("skills");
console.log("mySkillsListis", skillsList);

//create list of skills
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList[0].appendChild(skill);
}

//display messages in list
const messageSection = document.querySelector("#messages");
const messageSelection = messageSection.querySelector("ul");

//handle message form submit
const messageForm = document.querySelector('form[name="leave_message"]');
console.log(messageForm);

const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const submit = document.querySelector('button[type="submit"]');
console.log(submit);

submit.addEventListener("click", submitButton);

//callback function
function submitButton(e) {
  e.preventDefault();
  //display messages in list
  const item = document.createElement("li");
  item.innerHTML = `<a href="mailto:${email.value}">${name.value}</a><span>${textarea.value}</span>`;
  messageSelection.appendChild(item);
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", deleteItem);
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
function deleteItem(e) {
  e.target.parentNode.remove();
}
// }
//use Fetch API to get same GitHub API url
const githubAPI = "https://api.github.com/users/jenhealthy/repos";

//stretch goals: Chain a catch() function to your fetch call to handle errors from the server
fetch(githubAPI)
  .then((response) => {
    if (response.status != 200) {
      throw new Error(`There was a problem with your fetching.`);
    }
    //Chain a then method to your fetch call and pass it a function that returns the response JSON data
    return response.json();
  })
  //then method and pass it a function, inside of which you can paste the code from your previous "load" event listener function
  .then(githubRequest)
  .catch((err) => {
    console.error({ err: err });
  });

function githubRequest(repositories) {
  console.log({ respositories: repositories });

  //handle response from server
  // githubRequest.addEventListener("load", gitHandler);

  //serverside you parse the data into object
  // const repositories = JSON.parse(this.response);

  const projectList = document.querySelector("#projects");
  const ulElement = projectList.querySelector("ul");
  for (let i = 0; i < repositories.length; i++) {
    const repo = repositories[i];
    let project = document.createElement("li");
    project.innerHTML = `<a href= ${repositories[i].html_url}>${repositories[i].name}</a>`;
    ulElement.appendChild(project);
    let newList = document.createElement("ul");
    project.appendChild(newList);
    let projectDescription = document.createElement("li");
    projectDescription.innerText = repositories[i].description;
    newList.appendChild(projectDescription);

    let projectDate = document.createElement("li");
    let createDate = new Date(Date.parse(repositories[i].created_at));
    projectDate.innerText =
      createDate.getMonth() +
      "/" +
      createDate.getDate() +
      "/" +
      createDate.getFullYear() +
      " " +
      createDate.getHours() +
      ":" +
      createDate.getMinutes();
    //projectDate.innerText = createDate.toDateString();
    newList.appendChild(projectDate);
  }
}
