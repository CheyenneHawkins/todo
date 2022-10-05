import {  projectArray  } from './index.js';


function loadProject(project){
    //get workarea
    const workarea = document.querySelector('.workarea');
    workarea.innerHTML = '';

    //make project top div
    const projectTopDiv= document.createElement('div');
    projectTopDiv.classList.add('workareatop');
    projectTopDiv.setAttribute('id', 'workareatop')  
    
    //make project title div
    const projectTitleDiv= document.createElement('div');
    projectTitleDiv.classList.add('workareatitle');
    projectTitleDiv.setAttribute('id', 'workareatitle')  
    
    //make task add div
    const projectTaskAddDiv= document.createElement('div');
    projectTaskAddDiv.classList.add('workareataskadd');
    projectTaskAddDiv.setAttribute('id', 'workareataskadd')  
    
    
    
    //make project tasks div
    const projectTasksDiv = document.createElement('div');
    projectTasksDiv.classList.add('projecttasks');
    projectTasksDiv.setAttribute('id', 'projecttasks')

    //project name as title
    projectTitleDiv.textContent = project.name;
    console.log("YEAH")

    //test work area
    projectTasksDiv.textContent = project.details;


    //appendages
    projectTopDiv.appendChild(projectTitleDiv)
    projectTopDiv.appendChild(projectTaskAddDiv)
    workarea.appendChild(projectTopDiv)
    workarea.appendChild(projectTasksDiv)


}

export  {  loadProject  }