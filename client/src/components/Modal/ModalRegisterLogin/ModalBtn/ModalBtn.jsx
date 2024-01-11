import './style.css';
import { HiArrowLongRight } from "react-icons/hi2";


export default function ModalBtn({ children }) {
  return (
    <button className='btnStyle' type="submit">
      {children}
      <span className='decoration'>
        <HiArrowLongRight className='arrow'></HiArrowLongRight>
      </span>
    </button>
  );
}
