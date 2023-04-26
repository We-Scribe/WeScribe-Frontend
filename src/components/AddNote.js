import React, { useState } from 'react';

import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function AddNote(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text>Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddNote;
