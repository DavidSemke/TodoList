import { createAddTaskView } from "./addView";
import { saveToLocalStorage } from "./storage.js";

function createTaskView(project) {
  const view = document.querySelector("#taskView");
  view.innerHTML = "";

  if (!project) {
    return;
  }

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("primaryContainer");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headView");

  const header = document.createElement("h2");
  header.textContent = project.getTitle();
  const addButton = document.createElement("button");
  addButton.classList.add("buttonLarge");
  addButton.textContent = "+";
  addButton.onclick = function () {
    createAddTaskView(project);
  };

  for (const el of [header, addButton]) {
    headerDiv.appendChild(el);
  }

  const metaDiv = createMetaList(project);

  for (const el of [headerDiv, metaDiv]) {
    projectDiv.appendChild(el);
  }

  const itemListDiv = document.createElement("div");
  itemListDiv.id = "taskViewBody";
  const itemList = document.createElement("ol");
  const taskList = project.getTaskList();

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    const li = document.createElement("li");
    li.classList.add("task");

    const metaList = createMetaList(task);
    metaList.style.display = "none";

    li.onclick = function () {
      if (metaList.style.display === "none") {
        metaList.style.display = "flex";
      } else {
        metaList.style.display = "none";
      }
    };

    const TaskHead = document.createElement("div");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkboxSmall");
    input.checked = task.getComplete();
    input.onclick = function (event) {
      task.setComplete(!task.getComplete());
      event.stopPropagation();
      saveToLocalStorage();
    };

    const header = document.createElement("h3");
    header.textContent = task.getTitle();

    const delButton = document.createElement("button");
    delButton.classList.add("buttonSmall");
    delButton.textContent = "-";
    delButton.onclick = function (event) {
      project.removeFromTaskList(i);
      createTaskView(project);
      event.stopPropagation();
      saveToLocalStorage();
    };

    for (const el of [input, header, delButton]) {
      TaskHead.appendChild(el);
    }

    for (const el of [TaskHead, metaList]) {
      li.appendChild(el);
    }

    itemList.appendChild(li);
  }

  itemListDiv.appendChild(itemList);

  for (const el of [projectDiv, itemListDiv]) {
    view.appendChild(el);
  }
}

function createMetaList(task) {
  const metaList = document.createElement("dl");
  metaList.classList.add("metadataContainer");

  const descripDiv = document.createElement("div");

  const descripLabel = document.createElement("dt");
  descripLabel.textContent = "Description";
  const description = document.createElement("dd");
  description.textContent = task.getDescrip() ?? "None";

  for (const el of [descripLabel, description]) {
    descripDiv.appendChild(el);
  }

  const otherDiv = document.createElement("div");
  const otherData = {
    "Due Date": task.getDueDate() ?? "None",
    Priority: task.getPriority(),
  };

  for (const pair of Object.entries(otherData)) {
    const label = document.createElement("dt");
    label.textContent = pair[0];
    const content = document.createElement("dd");
    content.textContent = pair[1];

    for (const el of [label, content]) {
      otherDiv.appendChild(el);
    }
  }

  for (const el of [descripDiv, otherDiv]) {
    metaList.appendChild(el);
  }

  return metaList;
}

export { createTaskView };
