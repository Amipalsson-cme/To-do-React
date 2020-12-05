import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



const  NewNote = ({ setInputText ,todos ,setTodos,inputText}) => {
    const inputTextHandler =(e) => {
        console.log (e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text:  inputText}
        ])
        setInputText("")
 }
    return (
        <Form>
          <Form.Row className="align-items-center">
        <Col xs="auto">
              <Form.Label  htmlFor="inlineFormInput" srOnly>
              </Form.Label>
      <Form.Control
        className="mb-2"
        value ={inputText}
        style={{marginTop:'20px'}}
        id="inlineFormInput"
        placeholder="Insert Note"
        onChange ={inputTextHandler}
        
      />
      </Col>


      <Col xs="auto">
      <Button onClick = {submitTodoHandler} type="submit" className="mb-2" style={{marginTop:'20px'}}>
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form>
    )


}

export default NewNote ;


