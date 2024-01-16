import { createPortal } from "react-dom";
import { ModalBg, ModalBody } from "./Modal.style";
import ModalClose from "./ModalClose";
import ModalLogo from "./ModalLogo";



export default function ModalWrapper({closeModal, children, closeModalReset}){
  const modalRoot = document.querySelector('#modal-root');
  
  const closeModalOnBG = ({ target, currentTarget }) => {
   if (target === currentTarget){
      closeModal ? closeModal() : closeModalReset();
    } 
  };

  return createPortal(
    <ModalBg onClick={(e)=>closeModalOnBG(e)}>
      <ModalBody>
        <ModalLogo></ModalLogo>
        <ModalClose closeModal={closeModal} closeModalReset={closeModalReset}></ModalClose>
        {children}
      </ModalBody>
    </ModalBg>,
    modalRoot
  );
}