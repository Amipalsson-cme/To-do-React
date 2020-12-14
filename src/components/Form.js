import React, {useState , useEffect } from 'react'
import BootstrapForm  from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { createNote, updateNote ,deleteNote } from '../helpers/noteHelpers'



export default function Form({selectedNote ,setSelectedNote,  refreshList}){
 
  const [title,setTitle] = useState('')
  const [isSaved,setIsSaved] = useState(false) 
  const [body,setBody] = useState('')

 useEffect(() => {
   if (selectedNote)  return setTitle(selectedNote.title),setBody(selectedNote.body)
   setTitle('')
   setBody('')
 }, [selectedNote])


  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    setTitle(' ')
    setBody(' ')
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
     
    if (selectedNote){
      updateNote(selectedNote.id,title,body)
         return refreshList()
     

    }
    createNote(title,body)
    refreshList()
  }

  const onDelete = (e) =>{
    e.preventDefault()
    const { id } = selectedNote
    deleteNote(id)
    refreshList()
    setTitle(' ')
    
  
  }
  return(
    <BootstrapForm>
      <BootstrapForm.Group>
        <BootstrapForm.Control 
        className="mb-4" 
        size="lg" 
        value={title} 
        onChange={onChangeTitle}/>

        <BootstrapForm.Control as="textarea"
        size="lg"
        value={body}
        onChange={onChangeBody}

        />
    
      </BootstrapForm.Group>
      <Button variant = "success" style={{ marginRight : 10}} onClick={onSave}>Save</Button>
      {selectedNote && <Button variant ="danger" onClick={onDelete}>Delete</Button>}
      {isSaved && <Alert variant="success" style ={{marginTop : '30px'}}><p>Saved!</p></Alert>}
      </BootstrapForm>
  
  )
}