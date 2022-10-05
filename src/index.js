//returns object to add to project array
import { addProject, addButtonClick } from './makeproject.js'; 
import { listProjects } from './listprojects.js'; 
import { addTask } from './addtask.js'; 

//holder for project name
// const projectName = '';

//holder for projects
const projectArray = [];

//test connection
console.log("IT'S STILL LIVE AGAIN NOW!!!");

//log initial array
console.table(projectArray);

const addButton = document.getElementById('additem');
addButton.addEventListener('click', addButtonClick);

function runShowArray(){
    console.table(projectArray);
    projectArray.push(addProject());
    listProjects(projectArray);
    console.table(projectArray);

}

// runShowArray();

//add project
// projectArray.push(addProject());
// projectArray.push(addProject());

//log project with new object

