import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { createNote, getNotes } from '../helpers/noteHelpers'




export default function F({selectedNote}){
  console.log(selectedNote)
  const [title,setTitle] = useState(' ')

 if (selectedNote) setTitle(selectedNote.title)

  const onChangeTitle =(e) => setTitle(e.target.value)
  const onSave =(e) => {
    e.preventDefault()
    console.log('Saving new note:', title)
    createNote(title, '')
    console.log(getNotes())
  }
  return(
    <Form>
      <Form.Group>
        <Form.Control 
        className="mb-4" 
        size="lg" 
        value={ selectedNote ? selectedNote.title :title} 
        onChange={onChangeTitle}/>
    
      </Form.Group>
      <button onClick={onSave}>Save</button>
      </Form>
  
  )
}