import { todo } from "./logic.js";

function saveToLocalStorage() {
  if (localStorageAvailable()) {
    const data = [];

    for (const project of todo.getProjectList()) {
      data.push(encodeTodoItem(project));
    }

    localStorage.projectList = JSON.stringify(data);
  }
}

function extractFromLocalStorage() {
  if (localStorageAvailable()) {
    const data = localStorage.projectList;

    if (data) {
      const encodedTodoItems = JSON.parse(data);

      for (const item of encodedTodoItems) {
        decodeTodoItem(item);
      }
    }
  }
}

function localStorageAvailable() {
  const test = "test";

  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);

    return true;
  } catch (e) {
    return false;
  }
}

// Parameter project is null if parameter encodedTodoItem is root project
// Does not return anything - data is placed directly into todo module
function decodeTodoItem(encodedTodoItem, project) {
  const todoItem = todo.TodoItem(
    encodedTodoItem.title,
    encodedTodoItem.descrip,
    encodedTodoItem.dueDate,
  );
  todoItem.setPriority(encodedTodoItem.priority);
  todoItem.setComplete(encodedTodoItem.complete);

  if (project) {
    project.addToTodoList(todoItem);
    todoItem.setProject(project);
  } else {
    todo.addToProjectList(todoItem);
  }

  for (const item of encodedTodoItem.todoList) {
    decodeTodoItem(item, todoItem);
  }
}

function encodeTodoItem(todoItem) {
  const encodedTodoList = [];
  const todoList = todoItem.getTodoList();

  for (const item of todoList) {
    encodedTodoList.push(encodeTodoItem(item));
  }

  return {
    title: todoItem.getTitle(),
    descrip: todoItem.getDescrip(),
    dueDate: todoItem.getDueDate(),
    priority: todoItem.getPriority(),
    todoList: encodedTodoList,
    complete: todoItem.getComplete(),
  };
}

export { extractFromLocalStorage, saveToLocalStorage };
