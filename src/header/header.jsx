
import './header.css';
import React, {useState,useEffect} from 'react';
import { IoIosMoon } from "react-icons/io";

function Header(props) {
  const  [filterValue,setFilterValue] = useState('')
  const  [changedRegion,setChangedRegion] = useState('')
  const  [isOpen,setIsOpen] = useState(props.modalOpen)
  const  [headerTheme,setHeaderTheme] = useState(props.theme)

  function handleFilter(e){
    const value = e.target.value;
    setFilterValue(value);
    props.filterFunc(value);
  }

  function handleChange(e){
    const region = e.target.value;
    setChangedRegion(region)
    props.changeRegion(region)
    setFilterValue('');
  }

  function handleClick(){
    props.changeTheme();
  }

  useEffect(() => {
    setIsOpen(props.modalOpen);
  }, [props.modalOpen]);
  useEffect(() => {
    setHeaderTheme(props.theme);
  }, [props.theme]);


  return (
    <div className={`header-div ${isOpen ? "hidden" : ""} ${headerTheme ? "headerDarkBg": ""}`}>
        
        <select name="" id="" className='filter' onChange={handleChange}>
            <option value="" defaultValue={''} hidden>Filter by Region</option>
            <option value="">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
        <input type="text" placeholder='Search for a country...' value={filterValue} className='search-bar' onChange={handleFilter}/>
        <button className={`changeTheme ${headerTheme ? "btncolor": ""}`} onClick={handleClick}><IoIosMoon/>Change theme</button>
    </div>
  );
}

export default Header;
