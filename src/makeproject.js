import {  projectArray  } from './index.js';
import { listProjects } from './listprojects.js'; 


let projectName = '';

function addButtonClick(){

    function popUp(){
        //find popup div
        const pop = document.querySelector('#popup');
    
        //make entry box
        function getProjectInfo (){
                let entryName ='';

                //initialize variable
                projectName = '';
                
                //box
                const entryBox = document.createElement('div');
                
                //set attributes
                entryBox.classList.add('popupbox');
                entryBox.setAttribute('id', 'popupbox');
                
                //append to popup div
                pop.appendChild(entryBox);
        
                //entry label
                const entryLabel = document.createElement('div');
                entryLabel.classList.add('entrylabel');
                entryLabel.setAttribute('id', 'entrylabel');
                entryLabel.textContent = 'Project Name:'
                entryBox.appendChild(entryLabel);
                
                //entry input field
                const entryInput = document.createElement('div');
                entryInput.classList.add('entryinput');
                entryInput.setAttribute('id', 'entryinput');
                const entryField = document.createElement('input');
                entryField.classList.add('entryfield');
                entryField.setAttribute('id', 'entryfield');
                entryInput.appendChild(entryField);
                entryBox.appendChild(entryInput);
                const entrySubmit = document.createElement('button');
                entryBox.appendChild(entrySubmit);
        
                pop.classList.remove('inactive');
                pop.style.display = "grid";
                
                entrySubmit.addEventListener('click', getName)
                
                //grabs whatever is in entry field
                function getName (){
                    entryName = document.getElementById('entryfield')
                    projectName = entryName.value; 
                    console.log(projectName);

                    //make object
                    const projectNameObject = {
                        name: projectName,
                        tasks: [],
                        details: `things like ${projectName} and stuff`
                    };

                    //log object
                    console.log(projectNameObject)

                    //load object into array
                    projectArray.push(projectNameObject);
                    listProjects(projectArray);
                    pop.classList.add('inactive');
                    exitEntry();

                }
                
                //exit popup function
                function exitEntry (){
                    pop.innerHTML = '';
                    pop.style.display = "none";
                    document.removeEventListener('keydown', event);

                }
                //listener to escape or enter popup 
                document.addEventListener('keydown', function(event){
                    if(event.key === "Escape"){
                        exitEntry();
                    } else if (event.key === "Enter"){
                        getName();
                    }
                })
                return entryName.value;
        };
    
        const getProjectInfoFunc =  getProjectInfo();

        getProjectInfoFunc;

        // pop.style.display = "grid";
    
    };
    const runPop = popUp();
    runPop;
}


//HOW DO I GET entryName OUT OF THE OTHER FUNCTION?!!!

function addProject(){

    console.log("MAKE PROJECT WORKS")

    const projectHolder = {
        title: '', 
        items: '', 
        tasks: [],
        details: 'ljk'

    };
    
    return projectHolder;
}

export {  addProject, addButtonClick }