import '../css/style.css'
import { todo } from './logic.js'
import { createProjectView } from './projectView'
import { createAddProjectView } from './addView'


const project1 = todo.TodoItem('project1')
const project2 = todo.TodoItem('project2')

todo.addToProjectList(project1)
todo.addToProjectList(project2)

const child1 = todo.TodoItem('child1')
const child2 = todo.TodoItem('child2')

project1.addToTodoList(child1)
child1.setProject(project1)

project1.addToTodoList(child2)
child2.setProject(project1)

createProjectView(todo)

const addProjectBtn = document.querySelector('#addProjectButton')
addProjectBtn.onclick = function () {
    createAddProjectView()
}