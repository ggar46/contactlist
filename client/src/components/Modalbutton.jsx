import Modal from './Modal.jsx'
import { useState } from 'react';


const Modalbutton = (props) =>  {
    const [show, setShow] = useState(false);

    const contactButtonHandler = (e) => {
        e.preventDefault();
        setShow(!show);
    }

    return (
        <div>
            <button id = 'modalButton' onClick={contactButtonHandler}>Contact Info</button>
            <Modal show={show}> {props.children} </Modal>
        </div>
    )
}

export default Modalbutton;

/*
-when the button is clicked, we want to change the contact info to toggle if it is showing/not showing. 
- here we pass the user's selection down so we can change the visibility of the modal.
- placeholder instead of student.
- phonenumber = in contact, props. in modalbutton
-
 */