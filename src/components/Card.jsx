  import React from 'react';
  import styles from './Card.module.css'
  export default function Card({max, min, name, img, onClose}) {
    // acá va tu código

    function handleOnClose(){
      if(typeof onClose === 'function') onClose();
    }

    return <div className= {styles.component}>
        <button onClick={handleOnClose} className={styles.btn}>X</button>
        <div className={styles.content}>
          <h3>{name}</h3>
          <div className={styles.temp}>
            <div>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div>
              <p>Max</p>
              <p>{max}°</p>
            </div>
          </div>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen'/>
      </div>
  };