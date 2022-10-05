//returns object to add to project array
import { addProject, addButtonClick } from './makeproject.js'; 
import { listProjects } from './listprojects.js'; 
import { loadProject } from './loadproject.js'; 
import { addTask } from './addtask.js'; 

//holder for project name
// const projectName = '';

//holder for projects
const projectArray = [{name: 'Default', tasks: [], details: 'normal things'}];


//test connection
// console.log("IT'S STILL LIVE AGAIN NOW!!!");

//log initial array
console.table(projectArray);

//load default project
listProjects(projectArray);

loadProject(projectArray[0]);

const addButton = document.getElementById('additem');
addButton.addEventListener('click', addButtonClick);

const arrayPrint = document.getElementById('bell');
arrayPrint.addEventListener('click', ()=> console.log(projectArray));


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

export {  projectArray  }