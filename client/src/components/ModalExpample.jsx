import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import Updating from './Updating'

const ModalExpample = ({id}) => {

  const State = useSelector(state => state.RestaurantReducer)
  const chosenRestaurant = State.filter(res => res.id === id)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button className='btn-warning' onClick={handleShow}>
        Edit
      </Button>

      <Modal
        fullscreen
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>Edit Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Updating chosenRestaurant={chosenRestaurant}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExpample
