import {deleteToDo} from '../models/toDoListModel'
let dialog
let deleteButton
let exitButton
let uid

export function deleteToDoController(itemuid){
    uid = itemuid
    dialog = document.querySelector('#delete-to-do')
    exitButton = dialog.querySelector('#exit')
    deleteButton = dialog.querySelector('#delete')
    configureListensers()
    dialog.showModal()
}

function configureListensers() {
    exitButton.addEventListener('click', onCloseDialog)
    deleteButton.addEventListener('click', onRemoveToDo)
}

function onCloseDialog(e) {
    dialog.close()
}

function onRemoveToDo(e){
    console.log(`delete todo item ${uid}`)
    deleteToDo(uid)
    onCloseDialog()
}