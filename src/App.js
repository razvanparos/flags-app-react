import './App.css';
import React, {useState,useEffect} from 'react';
import FlagViewer from './flag-viewer/flagviewer';
import Header from './header/header';
import data from './data.json'
import Modal from './modal/modal';

function App() {
  
  const [flagData,setFlagData]= useState(data);
  const [regionFiltered,setRegionFiltered]= useState(data);
  const [modalOpen, setModalOpen]= useState(false);
  const [openModalData, setOpenModalData]= useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'true');
 

  useEffect(() => {
    // When the 'theme' state changes, update the 'localStorage' value
    localStorage.setItem('theme', theme);
  }, [theme]);
 
  
 


  function filterFunc(value){
    let updatedData = regionFiltered.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()));
    setFlagData(updatedData);

  }

  function changeRegion(regionn){
    let updatedData = data.filter((element) => element.region.toLowerCase().includes(regionn.toLowerCase()));
    setRegionFiltered(updatedData);
    setFlagData(updatedData);
  }

  function getModalData(modalData){
      setOpenModalData(modalData)
  }

  function openModal(val){
    setModalOpen(val);
   
  }
  function closeModal(){
    setModalOpen(false);
   
  }

  function changeTheme() {
    // Toggle the theme and update the localStorage
    const newTheme = !theme;
    setTheme(newTheme);
  }

  // console.log(data);


  return (
    <div className="app-div">
      <Modal modalOpen={modalOpen} modalData={openModalData} closeModal={closeModal} theme={theme}/>
      <Header filterFunc={filterFunc} changeRegion={changeRegion} modalOpen={modalOpen} changeTheme={changeTheme} theme={theme}/>
      <FlagViewer data={flagData} startData={data} getModalData={getModalData} openModal={openModal} modalOpen={modalOpen} theme={theme}/>
    </div>
  );
}

export default App;
