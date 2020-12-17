//localstorage
function initializeNotes() {
    localStorage.setItem('notes', JSON.stringify([]))
    return []

}

export function getNotes(){
    const notes =  localStorage.getItem('notes')
    if (!notes) {
        // eslint-disable-next-line no-const-assign
        notes = initializeNotes()
        
    } 
    
    const parsedNotes =JSON.parse(notes)
    return parsedNotes
} 
//create Note 
export function createNote (title, body) {
    const notes = getNotes()
    const note = {
        id: Date.now(),
        title,
        body,
    }
   
notes.push(note)
const jsonNoteArray = JSON.stringify(notes)
localStorage.setItem('notes',jsonNoteArray)
return note
}

export function getNote(id){
    const notes = getNotes()
    return notes.find(note => note.id === id)
}



// update a note
export function updateNote(id, title, body){
    const notes =getNotes()
    const indexToUpdate = notes.findIndex((note) => note.id === id)
    const note ={
        id,
        title,
        body
    }
    notes.splice(indexToUpdate, 1 )
    notes.splice (0, 0 , note)
    const jsonNoteArray = JSON.stringify(notes)
    localStorage.setItem('notes',jsonNoteArray)
    return note

}

// delete note
export function deleteNote (id) {
    const notes = getNotes()
    const indexToDelete= notes.findIndex(
    (note)  => note.id === id)
    if (indexToDelete>= 0)notes.splice( indexToDelete, 1 , )
    const jsonNoteArray = JSON.stringify(notes)
    localStorage.setItem('notes',jsonNoteArray)
    return true 
    
}

