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
        projTitle.textContent = 'ohoh';
        projItems.textContent = 'ohoh';
        
        //append to project div
        projList.appendChild(projTitle);
        projList.appendChild(projItems);
        
        //append to sidebar
        sidebar.appendChild(projList);
        console.log("DISPLAY WORKS" + `${i}`)
    }
}

export {  listProjects }