import React, { useState } from 'react'
import ReactModal from 'react-modal';


export default function Modal(){
    const [showModal, setShowModal] = useState(false)

    function handleOpenModal(){
    setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
}
return (
<div>
        <button onClick={handleOpenModal}>Trigger Modal</button>
        <ReactModal 
            
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
        >
          <button className="btn" onClick={handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>

)}