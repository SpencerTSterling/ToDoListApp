// Create a class

class ToDoItem{
    title: string; 
    dueDate: Date;
    isCompleted: boolean;
}

/*
let item = new ToDoItem();
item.title = "Testing";
item.dueDate = new Date(2020, 1, 1);
item.isCompleted = false;
*/

window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = main;
}

/**
 * If all input is valid, function gets ToDoItem
 * and stores it into the item variable
 * then the item is displayed on the webpage
 */
function main(){
    //console.log("button pressed");
    if ( isValid() ){
        let item = getToDoItem();
        displayToDoItem(item);
    }
}



/**
 * Checks form data is valid
 */
function isValid():boolean{
    return true;
}

/**
 * Get all input off form and wrap in
 * ToDoItem object
 */
function getToDoItem():ToDoItem{
    let myItem = new ToDoItem();
    //get title
    let titleInput = getInput("title");
    myItem.title = titleInput.value;

    //get due date
    let dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value);

    //get isCompleted
    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

/**
 * Display given ToDoItem
 * @param item new task
 */
function displayToDoItem(item:ToDoItem):void {
    // displays item's title as <h3>
    // ex. <h3>Record lecture</h3>
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    // displays item's due date as a string in <p>
    // ex. <p>June 1st 2020</p>
    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();

    // ex. <div class="completed></div>
    let itemDiv = document.createElement("div");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }

    /*
        <div class="completed">         <div>
            <h3> </h3>                        <h3> </h3>
            <p>   </P>                        <p>   </p>
        </div>                          <div>
    */
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompletedToDos = document.getElementById("incomplete-items");
        incompletedToDos.appendChild(itemDiv);
    }


}

// TASK: allow user to mark ToDoItem as complete





/**
 * Short-cut for <HTMLInputElement>document.getElementById
 * @param id id of the HTML Input Element
 */
function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}