import IconButton from 'components/Buttons/IconButton/IconButton';
import { RxCross1Style, CloseWrapper } from './Modal.style';

export default function ModalClose({closeModal, closeModalReset}) {

  return (
    <CloseWrapper>
      <IconButton ariaLabel="close modal" btnClick={closeModal ? ()=>closeModal(false) : ()=>closeModalReset(false)}>
        <RxCross1Style></RxCross1Style>
      </IconButton>
    </CloseWrapper>
  );
}
