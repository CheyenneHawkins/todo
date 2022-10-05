import {  loadProject  } from './loadproject.js';
import {  projectArray  } from './index.js';

function listProjects(x){
    
    //get sidebar div
    const sidebar = document.getElementById('sidebar');
    
    //loops through array and removes sidebar list
    document.querySelectorAll(".project").forEach((y)=> {
        sidebar.removeChild(y);
        console.log('removed ' + y)
    });
    
    //loop through array and creates new sidebar list
    for (let i=0; i<x.length; i++){

        //make new project div
        const projList = document.createElement('div');
        projList.classList.add('project');
        projList.setAttribute('id', `project${i}`);
        
        //project title div
        const projTitle = document.createElement('div');
        projTitle.classList.add('titles');
        projTitle.addEventListener('click', (e)=> loadProject(projectArray[i]));

        //project number of items div
        const projItems = document.createElement('div');
        projItems.classList.add('items');

        //add task div
        const taskAdd = document.createElement('div');
        taskAdd.classList.add('addtask');
        

        //title and items values
        projTitle.textContent = x[i].name;
        projItems.textContent = x[i].tasks.length;
        
        //append to project div
        projList.appendChild(projTitle);
        projList.appendChild(projItems);
        projList.appendChild(taskAdd);
        
        //append to sidebar
        sidebar.appendChild(projList);
        // console.log("DISPLAY WORKS" + `${i}`)
    }
}

export {  listProjects, loadProject }