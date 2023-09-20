import { createAddTodoItemView } from './addView'


function createTodoView(project) {
    const view = document.querySelector('#todoView')
    view.innerHTML = ''

    if (!project) { return }
    
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('primaryContainer')
    
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('headView')
    
    const header = document.createElement('h2')
    header.textContent = project.getTitle()
    const addButton = document.createElement('button')
    addButton.classList.add('buttonLarge')
    addButton.textContent = '+'
    addButton.onclick = function () {
        createAddTodoItemView(project)
    }

    for (const el of [header, addButton]) {
        headerDiv.appendChild(el)
    }

    const metaDiv = createMetaList(project)
    
    for (const el of [headerDiv, metaDiv]) {
        projectDiv.appendChild(el)
    }

    const itemListDiv = document.createElement('div')
    itemListDiv.id = 'todoViewBody'
    const itemList = document.createElement('ol')
    const todoList = project.getTodoList()

    for (let i=0; i<todoList.length; i++) {
        const todoItem = todoList[i]

        const li = document.createElement('li')
        li.classList.add('todoItem')
        
        const metaList = createMetaList(todoItem)
        metaList.style.display = 'none'

        li.onclick = function () {
            if (metaList.style.display === 'none') {
                metaList.style.display = 'flex'
            }
            else {
                metaList.style.display = 'none'
            }
        }

        const todoItemHead = document.createElement('div')

        const input = document.createElement('input')
        input.type = 'checkbox'
        input.classList.add('checkboxSmall')
        input.checked = todoItem.getComplete()
        input.onclick = function (event) {
            todoItem.setComplete(!todoItem.getComplete())
            event.stopPropagation()
        }

        const header = document.createElement('h3')
        header.textContent = todoItem.getTitle()

        const delButton = document.createElement('button')
        delButton.classList.add('buttonSmall')
        delButton.textContent = '-'
        delButton.onclick = function (event) {
            project.removeFromTodoList(i)
            createTodoView(project)
            event.stopPropagation()
        }

        for (const el of [input, header, delButton]) {
            todoItemHead.appendChild(el)
        }

        for (const el of [todoItemHead, metaList]) {
            li.appendChild(el)
        }
        
        itemList.appendChild(li)
    }

    itemListDiv.appendChild(itemList)

    for (const el of [projectDiv, itemListDiv]) {
        view.appendChild(el)
    }
}


function createMetaList(todoItem) {
    const metaList = document.createElement('dl')
    metaList.classList.add('metadataContainer')

    const descripDiv = document.createElement('div')
    
    const descripLabel = document.createElement('dt')
    descripLabel.textContent = 'Description'
    const description = document.createElement('dd')
    description.textContent = todoItem.getDescrip() ?? 'None'

    for (const el of [descripLabel, description]) {
        descripDiv.appendChild(el)
    }

    const otherDiv = document.createElement('div')
    const otherData = {
        'Due Date': todoItem.getDueDate() ?? 'None',
        'Priority': todoItem.getPriority()
    }

    for (const pair of Object.entries(otherData)) {
        const label = document.createElement('dt')
        label.textContent = pair[0]
        const content = document.createElement('dd')
        content.textContent = pair[1]
        
        for (const el of [label, content]) {
            otherDiv.appendChild(el)
        }
    }

    for (const el of [descripDiv, otherDiv]) {
        metaList.appendChild(el)
    }

    return metaList
}


export {createTodoView}