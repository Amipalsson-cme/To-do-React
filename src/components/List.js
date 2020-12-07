import React , { useState } from 'react'
import { getNotes } from '../helpers/noteHelpers'
import ListGroup from 'react-bootstrap/ListGroup'


export default function List(){
    const [selectedNote, setSelectedNote] =useState(undefined)
    const onSelectNote =(note) => {
        setSelectedNote(note)
        }

    return (
     <ListGroup as ="ul">
    
        {getNotes().map((note,index) =>(
            <ListGroup.Item 
            active={selectedNote ? note.id ===selectedNote.id: false } 
            onClick={()=> onSelectNote(note)} as="li" >
            {note.title}
         </ListGroup.Item>
  
        ))}

        </ListGroup>
    )
}









