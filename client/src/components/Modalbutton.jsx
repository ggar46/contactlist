import Modal from './Modal.jsx'
import { useState } from 'react';

const Modalbutton = () =>  {
    const [show, setShow] = useState(false);

    const contactButtonHandler = (event) => {
        setShow(!show);

    }

    return (
        <div>
            <button onClick={contactButtonHandler}>Contact Info</button>
            <Modal show={show}/>
        </div>
    )
}

export default Modalbutton;

/*
-when the button is clicked, we want to change the contact info to toggle if it is showing/not showing. 
- here we pass the user's selection down so we can change the visibility of the modal.
 */