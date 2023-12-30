/*
Reminders:
-querySelector only works at time it is initialized
*/


// BEHIND THE SCENES STUFF

// Initialize storage location for projects and todos
const projectStorage = [];
const toDoStorage = [];

// Project factory

// ToDo factory
const ToDoFactory = (title, description, dueDate, priority, notes, checklist) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    return {title, description, dueDate, priority, notes, checklist};
}

const toDo1 = ToDoFactory('a', 'b', 'c', 'd', 'e', 'f');
const toDo2 = ToDoFactory('g', 'h', 'i', 'j', 'k', 'l');
const toDo3 = ToDoFactory('m', 'n', 'o', 'p', 'q', 'r');
const toDo4 = ToDoFactory('s', 't', 'u', 'v', 'w', 'x');
const toDo5 = ToDoFactory('y', 'z', 'aa', 'bb', 'cc', 'dd');

addItemsToStorage(toDoStorage, toDo1, toDo2, toDo3);
console.log(toDoStorage);




// Function that updates
// Function that adds items
function addItemsToStorage(storageArray, ...items) {
    return storageArray.push(items);
}
// Function that removes items
function removeItemsFromStorage(storageArray, ...items) {
    return storageArray.splice('start', 'deleteCount', 'item1', 'etc.'); // Syntax
}



// DOM STUFF

// Function that removes elements in a container

// Function that adds elements to a container