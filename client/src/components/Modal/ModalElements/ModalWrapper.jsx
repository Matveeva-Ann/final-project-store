import { createPortal } from "react-dom";
import { ModalBg, ModalBody } from "./Modal.style";
import ModalClose from "./ModalClose";
import ModalLogo from "./ModalLogo";



export default function ModalWrapper({closeModal, children, closeModalReset}){
  const modalRoot = document.querySelector('#modal-root');
  
  return createPortal(
    <ModalBg>
      <ModalBody>
        <ModalLogo></ModalLogo>
        <ModalClose closeModal={closeModal} closeModalReset={closeModalReset}></ModalClose>
        {children}
      </ModalBody>
    </ModalBg>,
    modalRoot
  );
}