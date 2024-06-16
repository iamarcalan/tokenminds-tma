import classes from './Modal.module.css';

// eslint-disable-next-line react/prop-types
function Modal({ children , close }) {
  // const navigate = useNavigate();

  // function closeHandler() {
  //   navigate('..');
  // }

  return (
    <>
      <div className={classes.backdrop} onClick={close} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
