import React from 'react'
import Modal from "react-modal";
import './ModalComponent.css';

const ModalComponent = ({isOpen,toggleModal,person,employeeId}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={100}
    >
      <div>
        <h1>Person In Qusetion</h1>
        <h2>EmployeeId: <span>{employeeId}</span></h2>
        <h3>Name: {person}</h3>
      </div>
      <button onClick={toggleModal}>Close modal</button>
    </Modal>
  )
}

export default ModalComponent;
