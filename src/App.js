
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import List from './components/List'
import Form from './components/Form'
import Clock from './components/Clock'
import {getNotes} from './helpers/noteHelpers'

function App() {
  const [selectedNote, setSelectedNote] =useState(undefined)
  const [notes,setNotes] =useState([])
  
useEffect (()=> {
    const notes = getNotes()
    setNotes(notes)
  },[])

  const refreshList = ()=> {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => setSelectedNote (undefined)
 


  return (
<Container>
    <Clock />
    <Jumbotron fluid  style={{backgroundColor:'lightblue'}}>
    <h1  style ={{textAlign:'center'}}>Notes</h1>
    </Jumbotron>
 
    <Row>
    <Col  xs={12} md={4}>

    <Button onClick={onClickNewNote} className ="mb-4" variant="dark" block>New note
    </Button>
    <List notes={notes}selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
    </Col>
     <Col xs={12} md={8}>
   <Form 
   refreshList={refreshList} 
   selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>
  
    </Col>
    <Col  xs={12} md={8}>
  
 
   
    </Col>
    </Row>

</Container>
  );
}

export default App;



