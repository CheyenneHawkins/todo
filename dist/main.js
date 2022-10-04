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

/***/ "./src/listprojects.js":
/*!*****************************!*\
  !*** ./src/listprojects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listProjects": () => (/* binding */ listProjects)
/* harmony export */ });
function listProjects(x){
    sidebar.innerHTML = '';
    for (let i=0; i<x.length; i++){
        //get sidebar div
        const sidebar = document.getElementById('sidebar');

        //make new project div
        const projList = document.createElement('div');
        projList.classList.add('project');
        projList.setAttribute('id', `project${i}`);

        //project title div
        const projTitle = document.createElement('div');
        projTitle.classList.add('titles');

        //project number of items div
        const projItems = document.createElement('div');
        projItems.classList.add('items');
        
            // x[i].title = `Mr ${i}`;
            // x[i].items = x[i].tasks.length;
            // // x[i].tasks.push(`${i}`);
            // x[i].tasks.push(`${i}`);

        //title and items values
        projTitle.textContent = x[i].title;
        projItems.textContent = x[i].items;
        
        //append to project div
        projList.appendChild(projTitle);
        projList.appendChild(projItems);
        
        //append to sidebar
        sidebar.appendChild(projList);
        console.log("DISPLAY WORKS" + `${i}`)
    }
}



/***/ }),

/***/ "./src/makeproject.js":
/*!****************************!*\
  !*** ./src/makeproject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
function addProject(){

    console.log("MAKE PROJECT WORKS")

    const projectHolder = {
        title: '', 
        items: '', 
        tasks: [],

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeproject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeproject.js */ "./src/makeproject.js");
/* harmony import */ var _listprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listprojects.js */ "./src/listprojects.js");
/* harmony import */ var _addtask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtask.js */ "./src/addtask.js");
//returns object to add to project array
 
 
 

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
    projectArray.push((0,_makeproject_js__WEBPACK_IMPORTED_MODULE_0__.addProject)());
    (0,_listprojects_js__WEBPACK_IMPORTED_MODULE_1__.listProjects)(projectArray);
    console.table(projectArray);

}

//add project
// projectArray.push(addProject());
// projectArray.push(addProject());

//log project with new object

})();

/******/ })()
;
//# sourceMappingURL=main.js.map