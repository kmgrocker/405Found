import React from 'react'
import Modal from "react-modal";
import './ModalComponent.css';

const ModalComponent = ({isOpen,toggleModal,seatName,customMsg}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={70}
    >
      <div>
        <h1>You have booked a seat {seatName} successfully </h1>
        <h2>You have got 100 points Reward!!!</h2>
        <h2>A confirmation message has been sent to your registered mobile number.</h2>
      
      </div>
      <button onClick={toggleModal}>OK</button>
    </Modal>
  )
}

export default ModalComponent;
