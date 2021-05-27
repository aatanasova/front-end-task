import React from "react";
import {Card, Button, Row, Col} from "react-bootstrap";
import './Card.css'

const CardComponent = props => {
   
    return (
        <>
        <Card>
            <Card.Header>
                {props.title}
                {props.isContactInformationTable ? <span className="new-contact" onClick={props.onShow}>+New Contact</span> : ''}
            </Card.Header>
            <Card.Body>
                {props.body()}
            </Card.Body>
        </Card>
          
        </>
        );
  };
  export default CardComponent