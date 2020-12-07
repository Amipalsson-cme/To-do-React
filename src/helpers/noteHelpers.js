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
    const note ={
        id:  notes.length + 1,
        title,
        body,
    }
notes.push(note)
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
    const indexToUpdate = notes.findIndex(note => note.id === id)
    const note ={
        id,
        title,
        body
    }
    notes.splice(indexToUpdate, 1 , note)

}

// works!
export function deleteNote (id) {
    const indexToDelete= notes.findIndex(
    (note)  => note.id === id)
    notes.splice( indexToDelete, 1 , )
    return true 
    
}

