import { todo } from './logic.js'
import { createTodoView } from './todoView'
import { saveToLocalStorage } from './storage.js'

function createProjectView () {
  const view = document.querySelector('#projectViewBody')
  view.innerHTML = ''

  const container = document.createElement('ol')
  const projectList = todo.getProjectList()

  for (let i = 0; i < projectList.length; i++) {
    const project = projectList[i]

    const header = document.createElement('h3')
    header.textContent = project.getTitle()

    const delButton = document.createElement('button')
    delButton.classList.add('buttonSmall')
    delButton.textContent = '-'
    delButton.onclick = function (event) {
      todo.removeFromProjectList(i)
      createProjectView()

      if (todo.getSelectedProjectIndex() === i) {
        createTodoView(null)
      }

      event.stopPropagation()
      saveToLocalStorage()
    }

    const li = document.createElement('li')

    for (const el of [header, delButton]) {
      li.appendChild(el)
    }

    li.onclick = function () {
      todo.setSelectedProjectIndex(i)
      createTodoView(project)
    }

    container.appendChild(li)
  }

  view.appendChild(container)
}

export { createProjectView }
