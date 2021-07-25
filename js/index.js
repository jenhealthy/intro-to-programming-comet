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