import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
//import Todo from './Todo'
//import { todos } from '../App'





const ToDoList = ({ todos}) => {
    return (
     <ListGroup as="ul">
  <ListGroup.Item as="li" active>Note1</ListGroup.Item>
  <ListGroup.Item as="li">Note2</ListGroup.Item>
  <ListGroup.Item as="li" >Note3</ListGroup.Item>
  
</ListGroup>
    )
}




export default ToDoList;