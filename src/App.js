
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Container>
  <Row>
    <Col style={{backgroundColor: 'lightblue '}} xs={12} md={4}>
   List
    </Col>
    <Col style={{backgroundColor: 'grey '}} xs={12} md={8}>
      Editor
    </Col>
  </Row>
  
</Container>
  );
}

export default App;

const styles ={
  heading:{
    fontSize:100
  }
}
