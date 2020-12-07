
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
//import NewNote from './components/Form'
import AddNote from './components/InputNote'
import  List from './components/List'



function App( ) {
  return (
<Container>

    <Jumbotron fluid  style={{backgroundColor:'#dfd7ec'}}>
    <h1  style ={{textAlign:'center'}}>Notes</h1>
    </Jumbotron>

    <Row>
    <Col  xs={12} md={4}>
    <Button  className ="mb-4" variant="dark" block>New note
    </Button>
    <List />
    </Col>
     <Col xs={12} md={4}>
   <AddNote />
    </Col>
    <Col  xs={12} md={8}>
  
 
   
    </Col>
    </Row>

  
</Container>
  );
}

export default App;



