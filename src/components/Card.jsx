  import React from 'react';
  import styles from './Card.module.css'
  import CardTemp from './CardTemp';
  import PropTypes from 'prop-types';
  import {IoCloseCircleOutline} from "react-icons/io5"

  export default function Card({max, min, name, img, onClose}) {
    // acá va tu código

    function handleOnClose(){
      if(typeof onClose === 'function') onClose();
    }

    return <div className= {styles.card}>
        <button onClick={handleOnClose} className={styles.claseButton}>
          <IoCloseCircleOutline/>
        </button>
          <span className={styles.cityName}>{name}</span>
          <CardTemp label='Min' value={min}/>
          <CardTemp label='Max' value={max}/>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen'/>
      </div>
  };

  Card.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    onClose: PropTypes.func,
  }

 