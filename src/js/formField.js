function createInputField(type, name, labelText) {
    const inputDiv = document.createElement('div')
    
    const id = `${name}Input`
    const label = document.createElement('label')
    label.textContent = labelText
    label.for = id
    const input = document.createElement('input')
    input.type = type
    input.id = id
    input.name = name

    for (const el of [label, input]) {
        inputDiv.appendChild(el)
    }

    return inputDiv
}


function createSelectorField(options, name, labelText) {
    const selectorDiv = document.createElement('div')

    const id = `${name}Selector`
    const label = document.createElement('label')
    label.textContent = labelText
    label.for = id
    const selector = document.createElement('select')
    selector.name = name
    selector.id = id

    for (const o of options) {
        const option = document.createElement('option')
        option.value = o
        option.textContent = o

        selector.appendChild(option)
    }

    for (const el of [label, selector]) {
        selectorDiv.appendChild(el)
    }

    return selectorDiv
}


export {createInputField, createSelectorField}