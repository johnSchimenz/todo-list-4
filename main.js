/*
Reminders:
-querySelector only works at time it is initialized
*/

// BEHIND THE SCENES STUFF

// Initialize storage location for projects and todos
const projectStorage = [];
const toDoStorage = [];

// Specify parameters for ProjectFactory
const projectParameters = ['title', 'toDos'];

// Specify parameters for ToDoFactory
const toDoParameters = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];

// Project factory
const ProjectFactory = (title) => {
    title = title;
    toDos = [];
    return {title, toDos};
}

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

const project1 = ProjectFactory('Chores');
const project2 = ProjectFactory('Vacation');
const project3 = ProjectFactory('Workout');

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

addItemsToStorage(projectStorage, project1, project2, project3);

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

// DOM - Function that removes items in a container
function removeDomItems(classAttribute) {
    const selectRemovableItems = document.querySelectorAll('.' + classAttribute);
    selectRemovableItems.forEach((item) => {
        item.remove();
    })
}

displayDomItems(selectToDosContainer, toDoStorage, toDoParameters, 'todo');

displayDomItems(selectProjectsContainer, projectStorage, projectParameters, 'project');

// DOM - Make clickNewProjectButton clickable
clickNewProjectButton.addEventListener ('click', () => {

    // Temporarily disable both create new buttons
    clickNewProjectButton.setAttribute('disabled', 'disabled');
    clickNewToDoButton.setAttribute('disabled', 'disabled');

    // Create fieldset for form
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'fieldset');
    selectProjectsContainer.before(fieldset);

    // Create inputBox for form
    const inputBox = document.createElement('input');
    inputBox.setAttribute('id', projectParameters[0]);
    fieldset.appendChild(inputBox);

    // Create Submit button for form
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    submitButton.textContent = 'Submit';
    fieldset.appendChild(submitButton);

    // Create Cancel button for form
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel');
    cancelButton.textContent = 'Cancel';
    fieldset.appendChild(cancelButton);

    // DOM - make Cancel button clickable
    cancelButton.addEventListener('click', () => {
        selectBottomLeftContainer.removeChild(fieldset);
    })

    // DOM - make Submit button clickable
    submitButton.addEventListener ('click', () => {

        // Remove fieldset
        selectBottomLeftContainer.removeChild(fieldset);

        // Create new Project
        const newestProject = ProjectFactory(inputBox.value);

        // Add newestProject to storage
        projectStorage.push(newestProject);

        // DOM - remove previously displayed projects
        removeDomItems('project');

        // DOM - display all projects, including newestProject
        displayDomItems(selectProjectsContainer, projectStorage, projectParameters, 'project');
    })

    // Re-enables both create new buttons
    clickNewProjectButton.removeAttribute('disabled');
    clickNewToDoButton.removeAttribute('disabled');
})

// DOM - Make clickNewToDoButton clickable
clickNewToDoButton.addEventListener ('click', () => {

    // Temporarily disable both create new buttons
    clickNewProjectButton.setAttribute('disabled', 'disabled');
    clickNewToDoButton.setAttribute('disabled', 'disabled');
    
    // Create fieldset for form
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'fieldset');
    selectToDosContainer.before(fieldset);

    // Find number of todo parameters
    const countToDoParameters = toDoParameters.length;

    // Create labels and inputBox's for form, putting each pair in a container
    for (let i = 0; i < countToDoParameters; i++) {

        const pairLabelInputContainer = document.createElement('div');
        pairLabelInputContainer.setAttribute('id', toDoParameters[i] + '-container');
        pairLabelInputContainer.setAttribute('class', 'pair-label-inputbox');
        fieldset.appendChild(pairLabelInputContainer);

        const selectPairLabelInputContainer = document.querySelector('#' + pairLabelInputContainer.id);

        const label = document.createElement('label');
        label.setAttribute('for', toDoParameters[i]);
        label.textContent = toDoParameters[i];
        selectPairLabelInputContainer.appendChild(label);
        
        const inputBox = document.createElement('input');
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('id', toDoParameters[i]);
        inputBox.setAttribute('name', toDoParameters[i]);
        selectPairLabelInputContainer.appendChild(inputBox);
    }

    // Create Submit button for form
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    submitButton.textContent = 'Submit';
    fieldset.appendChild(submitButton);

    // Create Cancel button for form
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel');
    cancelButton.textContent = 'Cancel';
    fieldset.appendChild(cancelButton);

    // DOM - make Cancel button clickable
    cancelButton.addEventListener('click', () => {
        selectBottomRightContainer.removeChild(fieldset);
    })

    // DOM - make Submit button clickable
    submitButton.addEventListener ('click', () => {

        // Initialize storage for newest todo values
        const newestValuesToDo = [];

        // Push newest todo values into storage
        for (let i = 0; i < countToDoParameters; i++) {
            const selectInputBox = document.querySelector('#' + toDoParameters[i]);
            const toDoValue = selectInputBox.value;
            newestValuesToDo.push(toDoValue);
        }

        // Create newest todo item - DON'T like how this is hard-code; might be able to use '...' but don't want to mess with that now
        const newestToDo = ToDoFactory(
            newestValuesToDo[0],
            newestValuesToDo[1],
            newestValuesToDo[2],
            newestValuesToDo[3],
            newestValuesToDo[4],
            newestValuesToDo[5]
        )

        /*
        // Push inputBox values into newestToDo array
        for (let i = 0; i < countToDoParameters; i++) {
            newestToDo.push[]
        }

        // Remove fieldset
        selectBottomRightContainer.removeChild(fieldset);

        // Add newestProject to storage
        projectStorage.push(newestProject);

        // DOM - remove previously displayed projects
        removeDomItems('project');

        // DOM - display all projects, including newestProject
        displayDomItems(selectProjectsContainer, projectStorage, projectParameters, 'project');
        */
    })

    /*
    // Re-enables both create new buttons
    clickNewProjectButton.removeAttribute('disabled');
    clickNewToDoButton.removeAttribute('disabled');
    */
})