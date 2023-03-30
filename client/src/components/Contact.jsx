import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modalbutton from './Modalbutton'
import * as ioicons from 'react-icons/io5'


const Contact = ({student, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateStudent) => {
        toUpdate(toUpdateStudent)
    }

    const onDelete = (toDeleteStudent) => {
        toDelete(toDeleteStudent)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{student.firstname} </Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            <Modalbutton> 
                <p className='modalInfo'>Email: {student.email} </p>
                <p className='modalInfo'>Phone: {student.phonenumber}</p> 
                <p className='modalInfo'>Notes: {student.notes}</p> </Modalbutton>

            </Card.Body>
        </Card>
    )

}

export default Contact;