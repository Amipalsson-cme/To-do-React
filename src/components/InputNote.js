import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function AddNote(){
  return(
    <Form>
      <Form.Group >
       <Form.Label>Title</Form.Label>
       <Form.Control  className="mb-2" size="lg"/>
       <Form.Label>Note</Form.Label>
       <Form.Control   as='textarea' className="mb-2" size="lg"/>
      </Form.Group>
       <Button className="mr-2" variant="success">Save</Button>
       <Button variant="danger">Delete</Button>
    </Form>

  )

}