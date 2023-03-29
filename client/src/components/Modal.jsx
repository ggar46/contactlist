const Modal = (props) => {
    return(
        <div>
          {!props.show ? <p></p>: <p>here is where the contsact info should be passed down and pop up</p>}
        </div>
    )
}

export default Modal;


/*
- if the props are received and they defined as false in the parent
(by the true/false state) then render nothing, otherwise if true then show 
the contact info.
- 
*/