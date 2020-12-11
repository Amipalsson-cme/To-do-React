/*
C:create a note 
R:read (get) a note
U:update a note
D:delete a note
*/
 


const notes =[
{  id: 1,   title: 'Note 1' , body:' ' },
{ id:  2,  title: 'Note 2', body: 'Empty '},
{ id: 3 , title: 'Note 3', body : ' Something'},
{ id: 4, title: 'Note 4', body: ' '}
]

//  works!!
export function createNote (title, body) {
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

//  works!
export function getNote(id){
    return notes.find(note => note.id === id)
}

// works!
export function getNotes(){
    return notes

} 
// works!!
export function updateNote(id, title, body){
    const indexToUpdate = notes.findIndex((note) => note.id === id)
    const note ={
        id,
        title,
        body
    }
    notes.splice(indexToUpdate, 1 )
    notes.splice (0, 0 , note)
    return notes

}

// works!
export function deleteNote (id) {
    const indexToDelete= notes.findIndex(
    (note)  => note.id === id)
    if (indexToDelete>= 0)notes.splice( indexToDelete, 1 , )
    return true 
    
}

