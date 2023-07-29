import Card from '../card/card';
import React, {useState,useEffect} from 'react';
import './flagviewer.css';



function FlagViewer(props) {

  const  [isOpen,setIsOpen] = useState(props.modalOpen)
  const  [viewerTheme,setViewerTheme] = useState(props.theme)



  function getModalData(modalData){
    props.getModalData(modalData)
  }
  function openModal(val){
    props.openModal(val)


  }
  useEffect(() => {
    setIsOpen(props.modalOpen);
  }, [props.modalOpen]);
  useEffect(() => {
    setViewerTheme(props.theme);
  }, [props.theme]);


  return (
    <div className={`flagviewer-div ${isOpen ? "hidden" : ""} ${viewerTheme ? "modalDarkBg" : "modalWhiteBg"} `}>
        {   
            props.data.map((item,index)=>{
                return(
                    <Card 
                    key={index}
                    i={index}
                    data={props.data}
                    name={item.name}
                    flag={item.flag}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    getModalData={getModalData}
                    openModal={openModal}
                    />
                );
            })
        }
      
    </div>
  );
}

export default FlagViewer;
