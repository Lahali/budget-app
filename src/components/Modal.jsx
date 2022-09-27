import { useState } from "react";
import { ModalButton, ModalContentStyled, ModalStyled } from "./Styles";

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const changeModal = (e) => {
  //   e.preventDefault();
  //   setIsModalOpen(!isModalOpen);
  // };

  const changeModal = (e) => {
    e.preventDefault();
    // hemos buscado el nombre que da react al ModalContent para evitar que el modal se cierre al dar click sobre el texto.
    (e.target.attributes.class.value !== "sc-jqUVSM lprxEI"
    ) && setIsModalOpen(!isModalOpen)
    console.log(e)
  }

  return (
    <div>
      <ModalButton onClick={changeModal}>i</ModalButton>
      {isModalOpen && (
        <ModalStyled onClick={changeModal}>
          <ModalContentStyled >
            {props.text}
          </ModalContentStyled>
        </ModalStyled>
      )}
    </div>
  );
};

export default Modal;
