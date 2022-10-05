/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
function addTask(){

    console.log("MAKE PROJECT WORKS")

    const taskHolder = {
        title: '', 
        description: '', 
        duedate: '', 
        priority:'',
        show: '',
    };
    
    return taskHolder;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _makeproject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeproject.js */ "./src/makeproject.js");
/* harmony import */ var _listprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listprojects.js */ "./src/listprojects.js");
/* harmony import */ var _loadproject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadproject.js */ "./src/loadproject.js");
/* harmony import */ var _addtask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addtask.js */ "./src/addtask.js");
//returns object to add to project array
 
 
 
 

//holder for project name
// const projectName = '';

//holder for projects
const projectArray = [{name: 'Default', tasks: [], details: 'normal things'}];


//test connection
// console.log("IT'S STILL LIVE AGAIN NOW!!!");

//log initial array
console.table(projectArray);

//load default project
(0,_listprojects_js__WEBPACK_IMPORTED_MODULE_1__.listProjects)(projectArray);

(0,_loadproject_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(projectArray[0]);

const addButton = document.getElementById('additem');
addButton.addEventListener('click', _makeproject_js__WEBPACK_IMPORTED_MODULE_0__.addButtonClick);

const arrayPrint = document.getElementById('bell');
arrayPrint.addEventListener('click', ()=> console.log(projectArray));


function runShowArray(){
    console.table(projectArray);
    projectArray.push((0,_makeproject_js__WEBPACK_IMPORTED_MODULE_0__.addProject)());
    (0,_listprojects_js__WEBPACK_IMPORTED_MODULE_1__.listProjects)(projectArray);
    console.table(projectArray);

}

// runShowArray();

//add project
// projectArray.push(addProject());
// projectArray.push(addProject());

//log project with new object



/***/ }),

/***/ "./src/listprojects.js":
/*!*****************************!*\
  !*** ./src/listprojects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listProjects": () => (/* binding */ listProjects),
/* harmony export */   "loadProject": () => (/* reexport safe */ _loadproject_js__WEBPACK_IMPORTED_MODULE_0__.loadProject)
/* harmony export */ });
/* harmony import */ var _loadproject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadproject.js */ "./src/loadproject.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



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
        projTitle.addEventListener('click', (e)=> (0,_loadproject_js__WEBPACK_IMPORTED_MODULE_0__.loadProject)(_index_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[i]));

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



/***/ }),

/***/ "./src/loadproject.js":
/*!****************************!*\
  !*** ./src/loadproject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProject": () => (/* binding */ loadProject)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



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



/***/ }),

/***/ "./src/makeproject.js":
/*!****************************!*\
  !*** ./src/makeproject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonClick": () => (/* binding */ addButtonClick),
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _listprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listprojects.js */ "./src/listprojects.js");

 


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
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(projectNameObject);
                    (0,_listprojects_js__WEBPACK_IMPORTED_MODULE_1__.listProjects)(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map