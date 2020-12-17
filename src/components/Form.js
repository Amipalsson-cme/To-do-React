import React, {useState , useEffect } from 'react'
import BootstrapForm  from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { createNote, updateNote ,deleteNote } from '../helpers/noteHelpers'



export default function Form({selectedNote ,setSelectedNote,  refreshList}){
 
  const [title,setTitle] = useState('')
  const [isSaved,setIsSaved] = useState(false) 
  const [onDeleted,deletedNote] = useState(false)
  const [body,setBody] = useState('')

 useEffect(() => {
   // eslint-disable-next-line no-sequences
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
    deletedNote(true)
    setTimeout(() => deletedNote(false), 3000)
    
  
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
      {onDeleted && <Alert variant="danger" style = {{marginTop : '30px'}}><p>Deleted!</p></Alert>}
      {isSaved && <Alert variant="success" style ={{marginTop : '30px'}}><p>Saved!</p></Alert>}
    
      </BootstrapForm>
  
  )
}