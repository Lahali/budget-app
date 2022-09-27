import { useState } from "react";
import { ModalButton, ModalContentStyled, ModalStyled } from "./Styles";

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <ModalButton onClick={changeModal}>i</ModalButton>
      {isModalOpen && (
        <ModalStyled onClick={changeModal}>
          <ModalContentStyled>
            {props.text}
          </ModalContentStyled>
        </ModalStyled>
      )}
    </div>
  );
};

export default Modal;
