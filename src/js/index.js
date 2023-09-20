import '../css/style.css'
import {localStorageAvailable} from './storage'
import { createProjectView } from './projectView'
import { createAddProjectView } from './addView'


if (localStorageAvailable) {
    
}







createProjectView()

const addProjectBtn = document.querySelector('#addProjectButton')
addProjectBtn.onclick = function () {
    createAddProjectView()
}