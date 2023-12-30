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

// Function that updates
    // Function that adds items

    // Function that removes items


// DOM STUFF

// Function that removes elements in a container

// Function that adds elements to a container