import { createProjectView } from './projectView'
import { createTodoView } from './todoView'
import { todo } from './logic.js'
import {
    createInputField, createTextareaField, createSelectField
} from './formField'
import {saveToLocalStorage} from './storage.js'


function createAddProjectView() {
    const view = document.querySelector('#todoView')
    view.innerHTML = ''

    const addView = document.createElement('div')
    addView.classList.add('addView')

    const header = document.createElement('h2')
    header.textContent = 'Add Project'

    const form = createAddForm('addProject')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const project = submittedTodoItem()

        try {
            todo.addToProjectList(project)
            createProjectView()
            todo.setSelectedProjectIndex(
                todo.getProjectList().length - 1
            )
            createTodoView(project)
            saveToLocalStorage()
        }
        catch (error) {
            const errorText = document.querySelector('.errorText')
            errorText.textContent = error.toString()
        }
    })

    const errorText = document.createElement('p')
    errorText.classList.add('errorText')

    for (const el of [header, form, errorText]) {
        addView.appendChild(el)
    }

    view.appendChild(addView)

    return view
}


function createAddTodoItemView(project) {
    const view = document.querySelector('#todoViewBody')
    view.innerHTML = ''

    const addView = document.createElement('div')
    addView.classList.add('addView')

    const header = document.createElement('h3')
    header.textContent = 'Add Todo Item'

    const form = createAddForm('addTodoItem')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const todoItem = submittedTodoItem()

        try {
            project.addToTodoList(todoItem)
            todoItem.setProject(project)
            createTodoView(project)
            saveToLocalStorage()
        }
        catch (error) {
            const errorText = document.querySelector('.errorText')
            errorText.textContent = error.toString()
        }
    })

    const errorText = document.createElement('p')
    errorText.classList.add('errorText')

    for (const el of [header, form, errorText]) {
        addView.appendChild(el)
    }

    view.appendChild(addView)

    return view
}


function createAddForm(id) {
    const form = document.createElement('form')
    form.id = id

    const titleInputField = createInputField('text', 'title', 'Title')
    const titleInput = titleInputField.querySelector('input')
    titleInput.required = true

    const descripInputField = createTextareaField('descrip', 'Description')
    const dueDateInputField = createInputField(
        'date', 'dueDate', 'Due Date'
    )
    const prioritySelectorField = createSelectField(
        todo.getPriorities(), 'priority', 'Priority'
    )
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.textContent = 'Submit'

    const els = [
        titleInputField, 
        descripInputField, 
        dueDateInputField, 
        prioritySelectorField, 
        submitButton
    ]

    for (const el of els) {
        form.appendChild(el)
    }

    return form
}


function submittedTodoItem() {
    // only title and priority are required
    const titleInput = document.querySelector('#titleInput')
    const title = titleInput.value

    const descripInput = document.querySelector('#descripTextarea')
    let descrip = descripInput.value ? descripInput.value : null

    const dueDateInput = document.querySelector('#dueDateInput')
    let dueDate = dueDateInput.value ? dueDateInput.value : null

    const prioritySelector = document.querySelector('#prioritySelector')
    let priority = prioritySelector.value

    const todoItem = todo.TodoItem(title, descrip, dueDate)
    todoItem.setPriority(priority)

    return todoItem
}


export {createAddProjectView, createAddTodoItemView}