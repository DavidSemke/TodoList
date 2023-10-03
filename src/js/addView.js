import { createProjectView } from "./projectView";
import { createTaskView } from "./taskView";
import { todo } from "./logic.js";
import {
  createInputField,
  createTextareaField,
  createSelectField,
} from "./formField";
import { saveToLocalStorage } from "./storage.js";

function createAddProjectView() {
  const view = document.querySelector("#taskView");
  view.innerHTML = "";

  const addView = document.createElement("div");
  addView.classList.add("addView");

  const header = document.createElement("h2");
  header.textContent = "Add Project";

  const form = createAddForm("addProject");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = submittedTask();

    try {
      todo.addToProjectList(project);
      createProjectView();
      todo.setSelectedProjectIndex(todo.getProjectList().length - 1);
      createTaskView(project);
      saveToLocalStorage();
    } catch (error) {
      const errorText = document.querySelector(".errorText");
      errorText.textContent = error.toString();
    }
  });

  const errorText = document.createElement("p");
  errorText.classList.add("errorText");

  for (const el of [header, form, errorText]) {
    addView.appendChild(el);
  }

  view.appendChild(addView);

  return view;
}

function createAddTaskView(project) {
  const view = document.querySelector("#taskViewBody");
  view.innerHTML = "";

  const addView = document.createElement("div");
  addView.classList.add("addView");

  const header = document.createElement("h3");
  header.textContent = "Add Task";

  const form = createAddForm("addTask");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = submittedTask();

    try {
      project.addToTaskList(task);
      task.setProject(project);
      createTaskView(project);
      saveToLocalStorage();
    } catch (error) {
      const errorText = document.querySelector(".errorText");
      errorText.textContent = error.toString();
    }
  });

  const errorText = document.createElement("p");
  errorText.classList.add("errorText");

  for (const el of [header, form, errorText]) {
    addView.appendChild(el);
  }

  view.appendChild(addView);

  return view;
}

function createAddForm(id) {
  const form = document.createElement("form");
  form.id = id;

  const titleInputField = createInputField("text", "title", "Title");
  const titleInput = titleInputField.querySelector("input");
  titleInput.required = true;

  const descripInputField = createTextareaField("descrip", "Description");
  const dueDateInputField = createInputField("date", "dueDate", "Due Date");
  const prioritySelectorField = createSelectField(
    todo.getPriorities(),
    "priority",
    "Priority",
  );
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  const els = [
    titleInputField,
    descripInputField,
    dueDateInputField,
    prioritySelectorField,
    submitButton,
  ];

  for (const el of els) {
    form.appendChild(el);
  }

  return form;
}

function submittedTask() {
  // only title and priority are required
  const titleInput = document.querySelector("#titleInput");
  const title = titleInput.value;

  const descripInput = document.querySelector("#descripTextarea");
  const descrip = descripInput.value ? descripInput.value : null;

  const dueDateInput = document.querySelector("#dueDateInput");
  const dueDate = dueDateInput.value ? dueDateInput.value : null;

  const prioritySelector = document.querySelector("#prioritySelector");
  const priority = prioritySelector.value;

  const task = todo.TodoItem(title, descrip, dueDate);
  task.setPriority(priority);

  return task;
}

export { createAddProjectView, createAddTaskView };
