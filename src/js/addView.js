import { todo } from './logic.js'
import {createInputField, createSelectorField} from './formField'


function createAddProjectView() {
    const view = document.querySelector('#todoView')
    view.innerHTML = ''

    const addView = document.createElement('div')
    addView.classList.add('addView')

    const header = document.createElement('h2')
    header.textContent = 'Add Project'

    const form = createAddForm('addProject', '') //!!!!!!!!!!!!!!!!!!!!!!!!!

    for (const el of [header, form]) {
        addView.appendChild(el)
    }

    view.appendChild(addView)

    return view
}


function createAddTodoItemView() {
    const view = document.querySelector('#todoViewBody')
    view.innerHTML = ''

    const addView = document.createElement('div')
    addView.classList.add('addView')

    const header = document.createElement('h3')
    header.textContent = 'Add Todo Item'

    const form = createAddForm('addTodoItem', '') //!!!!!!!!!!!!!!!!!!!!!!!!!

    for (const el of [header, form]) {
        addView.appendChild(el)
    }

    view.appendChild(addView)

    return view
}


function createAddForm(id, action) {
    const form = document.createElement('form')
    form.id = id
    form.action = action
    form.method = 'post'

    const titleInput = createInputField('text', 'title', 'Title')
    const descripInput = createInputField(
        'textarea', 'descrip', 'Description'
    )
    const dueDateInput = createInputField('date', 'dueDate', 'Due Date')
    const prioritySelector = createSelectorField(
        todo.getPriorities(), 'priority', 'Priority'
    )
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.textContent = 'Submit'

    const els = [
        titleInput, 
        descripInput, 
        dueDateInput, 
        prioritySelector, 
        submitButton
    ]

    for (const el of els) {
        form.appendChild(el)
    }

    return form
}


export {createAddProjectView, createAddTodoItemView}