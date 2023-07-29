import './modal.css';
import React, {useState,useEffect} from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";


function Modal(props) {
  const [isOpen, setIsOpen] = useState(props.modalOpen);
  const [modalTheme, setModalTheme] = useState(props.theme);
  
    
  useEffect(() => {
    setIsOpen(props.modalOpen);
  }, [props.modalOpen]);
  
  useEffect(() => {
    setModalTheme(props.theme);
  }, [props.theme]);
  
  function handleBack(){
    props.closeModal();
  }

  
  
  

  return (
    <div className={`modal-div ${isOpen ? "" : "hidden"} ${modalTheme ? "modalDarkBg" : "modalWhiteBg"}`}>
       
        <button onClick={handleBack} className='backBtn'><IoIosArrowRoundBack className='arrow'/> Back</button>
        <div className='modal-content'>
          <img src={`${props.modalData.flag}`} alt="" />
          
          <div className={`flag-details ${modalTheme ? "flagDetailsDark" : "flagDetailsWhite"}`}>
            <h2 className='flagHeader'>{props.modalData.name}</h2>
            <p><strong>Native Name: </strong>{props.modalData.nativeName}</p>
            <p><strong>Population: </strong>{props.modalData.population?.toLocaleString()}</p>
            <p><strong>Region: </strong>{props.modalData.region}</p>
            <p><strong>Sub Region: </strong>{props.modalData.subregion}</p>
            <p><strong>Capital: </strong>{props.modalData.capital}</p>
            {props.modalData.currencies ? (
              <p>
              <strong>Currency: </strong>
              {props.modalData.currencies.map((currency, index) => (
                <span key={index}>
                  {currency.name} 
                  {index !== props.modalData.currencies.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        ) : (
          <p>Currency data not available.</p>
        )}
          
          </div>
          
        </div>
        
    </div>
  );
}

export default Modal;
