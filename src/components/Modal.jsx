import React from 'react'
import ModalContent from './ModalContent'
import { ModalStyled } from './Styles'

const Modal = ({children}) => {
  return (
    <article>
      <div>
          {children}
      </div>
    </article>
  )
}

export default Modal