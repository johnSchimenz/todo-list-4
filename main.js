/*
Reminders:
-querySelector only works at time it is initialized
*/

// BEHIND THE SCENES STUFF

// Initialize storage location for projects and todos
const projectStorageArray = [];
const toDoStorage = [];

// Specify parameters for ToDoFactory
const toDoParameters = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];

// Project factory

// Todo factory
const ToDoFactory = (title, description, dueDate, priority, notes, checklist) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    return {title, description, dueDate, priority, notes, checklist};
}

const toDo1 = ToDoFactory('Grocery Store', 'b', 'c', 'd', 'e', 'f');
const toDo2 = ToDoFactory('Sweep', 'h', 'i', 'j', 'k', 'l');
const toDo3 = ToDoFactory('Mop', 'n', 'o', 'p', 'q', 'r');
const toDo4 = ToDoFactory('Vaccuum', 't', 'u', 'v', 'w', 'x');
const toDo5 = ToDoFactory('Yard Work', 'z', 'aa', 'bb', 'cc', 'dd');

// Function that updates
// Function that adds items
function addItemsToStorage(storageArray, ...items) {
    const countItems = items.length;
    for (let i = 0; i < countItems; i++) {
        storageArray.push(items[i]);
    }
    return storageArray;
}
// Function that removes items
function removeItemsFromStorage(storageArray, ...items) {
    const countItems = items.length;
    for (let i = 0; i < countItems; i++) {
        storageArray.pop();
    }
    return storageArray;
}

addItemsToStorage(toDoStorage, toDo1, toDo2, toDo3, toDo4, toDo5);
console.log(toDoStorage);

// DOM STUFF
// DOM - List of all querySelector's
const selectBottomLeftContainer = document.querySelector('#bottom-left-container');
const selectBottomRightContainer = document.querySelector('#bottom-right-container');
const selectProjectsContainer = document.querySelector('#projects-container');
const selectToDosContainer = document.querySelector('#todos-container');
const clickNewProjectButton = document.querySelector('#create-project');
const clickNewToDoButton = document.querySelector('#create-todo');


// DOM - Function that displays items in a container
function displayDomItems(parentContainer, storage, parameters, classAttribute) {
    
    // Length of storage
    const countStorageItems = storage.length;
    console.log(countStorageItems);

    // Create container for each item
    for (let i = 0; i < countStorageItems; i++) {
        const childContainer = document.createElement('div');
        childContainer.setAttribute('class', classAttribute);
        parentContainer.appendChild(childContainer);

        // Create sub-container for each item
        for (let j = 0; j < 6; j++) {
            const subChildContainer = document.createElement('div');
            subChildContainer.textContent = storage[i][parameters[j]];
            childContainer.appendChild(subChildContainer);
        }
    }
}

displayDomItems(selectToDosContainer, toDoStorage, toDoParameters, 'todo');

/*
// DOM - Function that displays items in a container - WORKS
function displayDomItems(parentContainer, storage, classAttribute) {
    
    const countItems = items.length;
    console.log(countItems);
    for (let i = 0; i < countItems; i++) {

        // Create container for each item
        const childContainer = document.createElement('div');
        childContainer.setAttribute('class', classAttribute);
        childContainer.textContent = JSON.stringify(items[i]);
        parentContainer.appendChild(childContainer);
    }
}
*/

/*
// DOM - Function that removes elements in a container
function removeDomItems(container) {
    
    // Count number of child elements in container
    const countItems = container.childElementCount;

    // Rem

}
*/