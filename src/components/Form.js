import React, {useState , useEffect } from 'react'
import BootstrapForm  from 'react-bootstrap/Form'
import { createNote, getNotes , updateNote } from '../helpers/noteHelpers'



export default function Form({selectedNote , refreshList}){
 
  const [title,setTitle] = useState('')

 useEffect(() => {
   if (selectedNote) setTitle(selectedNote.title)
 }, [selectedNote])


  const onChangeTitle = (e) => setTitle(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    if (selectedNote){
      updateNote(selectedNote.id,title)
         return refreshList()
     

    }
    createNote(title, '')
    refreshList()
  }
  return(
    <BootstrapForm>
      <BootstrapForm.Group>
        <BootstrapForm.Control 
        className="mb-4" 
        size="lg" 
        value={title} 
        onChange={onChangeTitle}/>
    
      </BootstrapForm.Group>
      <button onClick={onSave}>Save</button>
      </BootstrapForm>
  
  )
}