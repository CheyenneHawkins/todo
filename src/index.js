//returns object to add to project array
import { addProject } from './makeproject.js'; 
import { listProjects } from './listprojects.js'; 
import { addTask } from './addtask.js'; 

//holder for projects
const projectArray = [];

//test connection
console.log("IT'S STILL LIVE AGAIN!!!");

//log initial array
console.table(projectArray);

const addButton = document.getElementById('additem');
addButton.addEventListener('click', runShowArray);

function runShowArray(){
    console.table(projectArray);
    projectArray.push(addProject());
    listProjects(projectArray);
    console.table(projectArray);

}

//add project
// projectArray.push(addProject());
// projectArray.push(addProject());

//log project with new object
