import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveStudent, editingStudent, onUpdateStudent }) => {

    // This is the original State with not initial student 
    const [student, setStudent] = useState(editingStudent || {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        notes: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setStudent((student) => ({ ...student, firstname }));

    };

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setStudent((student) => ({ ...student, lastname }));
    };


    const handleEmail  = (event)  => {
        const email = event.target.value;
        setStudent((student)  => ({...student, email}));
    }

    const handlePhone  = (event)  => {
        const phonenumber = event.target.value;
        setStudent((student)  => ({...student, phonenumber}));
    }

    const clearForm = () => {
        setStudent({ firstname: "", lastname: "", email:"", phonenumber:"", notes:""  })
    }

    const handleNotes = (event) => {
        const notes = event.target.value;
        setStudent((student)  => ({...student, notes}));
    }

    


    //A function to handle the post request
    const postStudent = (newStudent) => {
        return fetch("http://localhost:8080/api/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putStudent = (toEditStudent) => {
        return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.id) {
            putStudent(student);
        } else {
            postStudent(student);
        }
    };

    return (
        <Form className='form-students' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={student.firstname}
                    onChange={handleNameChange}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleLastnameChange}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>Email</Form.Label>
                <input
                    type="text"
                    id="add-email"
                    placeholder="Email"
                    required
                    value={student.email}
                    onChange={handleEmail}
                />
            </Form.Group>



            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <input
                    type="text"
                    id="add-phone-number"
                    placeholder="Phone Number"
                    required
                    value={student.phonenumber}
                    onChange={handlePhone}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>Notes</Form.Label>
                <input
                    type="text"
                    id="add-notes"
                    placeholder="Notes"
                    required
                    value={student.notes}
                    onChange={handleNotes}
                />
            </Form.Group>
            <Button id='submitButton' type="submit" variant="outline-success">{student.id ? "Edit Student" : "Add Student"}</Button>
            {student.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            
        </Form>
    );
};


export default MyForm