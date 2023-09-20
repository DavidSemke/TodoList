import '../css/style.css'
import {extractFromLocalStorage} from './storage'
import { createProjectView } from './projectView'
import { createAddProjectView } from './addView'


extractFromLocalStorage()
createProjectView()

const addProjectBtn = document.querySelector('#addProjectButton')
addProjectBtn.onclick = function () {
    createAddProjectView()
}