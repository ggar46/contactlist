const Modal = (props) => {
    return(
        <div>
          {!props.show ? <p></p>: <h5>{props.children} </h5>}
        </div>
    )
}

export default Modal;


/*
- if the props are received and they defined as false in the parent
(by the true/false state) then render nothing, otherwise if true then show 
the contact info.
*/