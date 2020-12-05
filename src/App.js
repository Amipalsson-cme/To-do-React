
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewNote from './components/Form'
import AddNote from './components/InputNote'
import ToDoList from './components/ToDoList'




function App() {
  const [inputText, setInputText] = useState (' ');
  const [todos, setTodos] = useState ([]);
  
  return (
<Container>
    <Row>
    <Col style={{backgroundColor:'lightgrey' , height:'100px', textAlign:'center', fontSize:'50px'}}>Notes</Col>
  </Row>

   <NewNote 
    todos ={todos} 
    setTodos ={setTodos} 
    setInputText={setInputText} 
    inputText ={inputText}

    />
       { todos.map((todo) => <li>{todo}</li>) // ???
       
   }
  
  <Row>
    <Col style={{backgroundColor: 'lightgrey'}} xs={12} md={4}>
   <ToDoList />
    </Col>
    <Col  xs={12} md={8}>
  
  <AddNote />
   
    </Col>
    </Row>

  
</Container>
  );
}

export default App;



