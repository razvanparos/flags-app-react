import './card.css';


function Card(props) {
    
  function handleCardClick(){
    let modalData=props.data[props.i]
    props.getModalData(modalData)
    props.openModal(true);
    

  }
  return (
    <div className="card-div" onClick={handleCardClick}>
        <img src={`${props.flag}`} alt="" className='flag-img'/>
        <div className='card-details'>
            <p className='flag-name'>{props.name}</p>
            <p><strong>Population: </strong>{props.population.toLocaleString() }</p>
            <p><strong>Region: </strong>{props.region}</p>
            <p><strong>Capital: </strong> {props.capital}</p>
        </div>
         
    </div>
  );
}

export default Card;
