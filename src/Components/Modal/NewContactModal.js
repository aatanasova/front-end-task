import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const NewContactModal = props => {
    const [fullName, setFullName] = useState('')
    const [position, setPosition] = useState('')
    const [email, setEmail] = useState('')
    const [mobilePhone, setMobilePhone] = useState('')
    const [businessPhone, setBusinessPhone] = useState('')
    const [fax, setFax] = useState('')


    const save = () => {
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        const contact = {
            id: random(1, 100), // harcoded id
            fullName: fullName,
            position: position,
            email: email,
            mobilePhone: mobilePhone,
            businessPhone: businessPhone,
            fax: fax,
        }

        props.onSave(contact)

        setFullName('');
        setPosition('');
        setEmail('');
        setMobilePhone('');
        setBusinessPhone('');
        setFax('');
    }
   
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group controlId="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" 
                                          placeholder="Enter full name"
                                          name="fullName"
                                          value={fullName}
                                          onChange={e => setFullName(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId="position">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" 
                                          placeholder="Enter position" 
                                          name="position"
                                          value={position}
                                          onChange={e => setPosition(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" 
                                          placeholder="Enter email" 
                                          name="email"
                                          value={email}
                                          onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="mobilePhone">
                            <Form.Label>Mobile Phone</Form.Label>
                            <Form.Control type="phone" 
                                          placeholder="Mobile Phone"
                                          name="mobilePhone"
                                          value={mobilePhone}
                                          onChange={e => setMobilePhone(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId="businessPhone">
                            <Form.Label>Business Phone</Form.Label>
                            <Form.Control type="phone" 
                                          placeholder="Business Phone"
                                          name="businessPhone"
                                          value={businessPhone}
                                          onChange={e => setBusinessPhone(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId="fax">
                            <Form.Label>Fax</Form.Label>
                            <Form.Control type="phone" 
                                          placeholder="Fax" 
                                          name="fax"
                                          value={fax}
                                          onChange={e => setFax(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={save}>Save</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
  };
  export default NewContactModal