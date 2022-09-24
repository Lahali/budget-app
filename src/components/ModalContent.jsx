import { useState } from 'react'
import Modal from './Modal'
import {  ModalButton } from './Styles'


const ModalContent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const changeModal = () => setIsModalOpen(!isModalOpen)


  return (
    <div >
      <ModalButton type="button" onClick={changeModal}>i</ModalButton> 
     {isModalOpen &&
       <Modal isModalOpen={isModalOpen}>
          <h2>hola modal</h2>
       </Modal> 
      }
    </div>
  )
}

export default ModalContent