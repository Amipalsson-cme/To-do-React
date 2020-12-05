



import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





const AddNote = () => {
    return(
        <Form>

  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" />
  <br />
    <Form.Label>Note Text</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>



  <Button variant="success">Update</Button>{' '}
  <Button variant="danger">Delete</Button> 
</Form>
    )
}

export default AddNote;