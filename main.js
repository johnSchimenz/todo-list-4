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

removeItemsFromStorage(toDoStorage, 1, 2, 3, 4);
console.log(toDoStorage);

// DOM STUFF

// Function that removes elements in a container

// Function that adds elements to a container