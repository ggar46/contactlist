import Modal from './Modal.jsx'
import { useState } from 'react';

const Modalbutton = () =>  {
    const [show, setShow] = useState(false);

    const contactButtonHandler = () => {

    }



    return (
        <div>
            <button onClick={contactButtonHandler}>Contact Info</button>
        </div>
    )
}

export default Modalbutton;