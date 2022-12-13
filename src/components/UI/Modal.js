import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import classes from './Modal.module.css'
import Button from './Button'
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
  return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          {props.content}
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>{props.buttonName}</Button>
        </footer>
      </Card>
  )
}

const Modal = (props) => {
  console.log('modal called')

  return (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
          )}

          {ReactDOM.createPortal(
            <ModalOverlay {...props} />,
            document.getElementById('overlay-root')
          )}
        </React.Fragment>
  )
}

export default Modal
